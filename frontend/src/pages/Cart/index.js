import React from 'react'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete, MdRemoveShoppingCart } from 'react-icons/md'
import { bindActionCreators } from 'redux'
import { formatPrice } from '../../util/format'

import { Container, ProductTable, Total, CheckoutButton, EmptyCartContainer } from './styles'

import { connect } from 'react-redux'

import * as CartActions from '../../store/modules/cart/actions'

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1)
    }

    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1)
    }

    function handleCheckout() {
        alert('handleCheckout()')
    }

    return (
        <Container>
            {!cart.length ? (
                <EmptyCartContainer>
                    <MdRemoveShoppingCart size={80} color="#ccc" />
                    <strong>CARRINHO VAZIO</strong>
                </EmptyCartContainer>
            ) : (
                <ProductTable>
                    <thead>
                        <tr>
                            <th />
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} alt="Tênis" />
                                </td>
                                <td>
                                    <strong>{product.title}</strong>
                                    <span>{product.formattedPrice}</span>
                                </td>
                                <td>
                                    <div>
                                        <button type="button" onClick={() => decrement(product)}>
                                            <MdRemoveCircleOutline size={20} color="#7159c1" />
                                        </button>

                                        <input readOnly value={product.amount} />

                                        <button type="button" onClick={() => increment(product)}>
                                            <MdAddCircleOutline size={20} color="#7159c1" />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{product.subtotal}</strong>
                                </td>
                                <td>
                                    <button type="button" onClick={() => removeFromCart(product.id)}>
                                        <MdDelete size={20} color="#7159c1" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ProductTable>
            )}

            <footer>
                <CheckoutButton type="button" disabled={!cart.length} onClick={handleCheckout}>Finalizar pedido</CheckoutButton>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
    })),
    total: formatPrice(state.cart.reduce((total, product) => { 
        return total + product.price * product.amount
    }, 0))
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)