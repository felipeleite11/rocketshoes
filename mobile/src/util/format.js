import { format } from 'number-currency-format'

function formatCurrency(price) {
    return format(price, {
        currency: 'R$',
        currencyPosition: 'LEFT',
        decimalSeparator: ',',
        thousandSeparator: '.'
    })
}

export default formatCurrency