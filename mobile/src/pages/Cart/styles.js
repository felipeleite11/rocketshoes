import styled from 'styled-components/native'
import { lighten } from 'polished'

export const Container = styled.View`
    flex: 1;
    background: ${lighten(0.04, '#17161b')};
    padding: 0 30px;
    justify-content: flex-start;
`

export const ProductList = styled.View`
    background: #fff;
    border-radius: 4px;
    padding: 10px;
    margin: 30px 0;
`

export const Product = styled.View`
    margin: 5px 0;
    flex-direction: row;
    background: #fff;
    justify-content: space-between;
    padding: 5px;
`

export const ProductData = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const Name = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 14px;
    color: #333;
    max-width: 170px;
    flex: 1;
`

export const Price = styled.Text`
    font-size: 18px;
    color: #222;
    font-weight: bold;
`

export const Image = styled.Image`
    width: 80px;
    height: 80px;
`

export const EmptyCartContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const EmptyCartPlaceholderLabel = styled.Text`
    color: #333;
    font-weight: bold;
    font-size: 18px;
`

export const Footer = styled.View`
    background: #ddd;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
    margin-bottom: 10px;
`

export const Subtotal = styled.Text`
    padding: 0 16px;
    font-weight: bold;
    font-size: 16px;
`

export const AmountControl = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Amount = styled.TextInput.attrs({
    readonly: true
})`
    background: #fff;
    color: #333;
    border: none;
    font-size: 14px;
    padding: 0 8px;
    margin: 0 5px;
`

export const Total = styled.View`
    justify-content: center;
    align-items: center;
    padding: 15px;
`

export const TotalLabel = styled.Text`
    color: #666;
    font-size: 14px;
`

export const TotalValue = styled.Text`
    color: #333;
    font-size: 22px;
    font-weight: bold;
`

export const CheckoutButton = styled.TouchableOpacity`
    border-radius: 4px;
    background: #7159c1;
    align-items: center;
    justify-content: center;
    height: 50px;
`

export const CheckoutButtonText = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`