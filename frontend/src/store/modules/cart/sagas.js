import { call, put, all, takeLatest, select } from 'redux-saga/effects'

import { formatPrice } from '../../../util/format'

import api from '../../../services/api'

import { addToCartSuccess, updateAmount } from './actions'

function* addToCart({ id }) {
    const product = yield select(state => state.cart.find(p => p.id === id))

    if(product) {
        const amount = product.amount + 1
        yield put(updateAmount(id, amount))
    }
    else {
        const response = yield call(api.get, `/products/${id}`)

        const data = {
            ...response.data,
            amount: 1,
            formattedPrice: formatPrice(response.data.price)
        }

        yield put(addToCartSuccess(data))
    }
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart)
])