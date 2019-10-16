import styled from 'styled-components/native'
import { darken, lighten } from 'polished'

export const Container = styled.View`
    padding: 0;
    background: ${lighten(0.04, '#17161b')};
    flex: 1;
`

export const ProductList = styled.FlatList`
    padding: 30px 10px;
`

export const Product = styled.View`
    border-radius: 6px;
    margin: 0 15px;
    background: #fff;
    border: solid 1px #999;
    padding: 20px 20px;
    width: 320px;
    max-height: 490px;
`

export const Name = styled.Text.attrs({
    numberOfLines: 2
})`
    font-size: 16px;
    margin: 16px 0 10px 0;
    color: #222;
`

export const Price = styled.Text`
    font-size: 22px;
    color: #444;
    font-weight: bold;
    margin: auto 0 10px 0;
`

export const Image = styled.Image`
    width: 270px;
    height: 270px;
`

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    background: #7159c1;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
`

export const ButtonLabel = styled.Text`
    color: #fff;
`

export const ButtonIconContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 50px;
    background: ${darken(0.05, '#7159c1')};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`

export const ButtonLabelContainer = styled.View`
    flex: 1;
    align-items: center;
`

export const Amount = styled.Text`
    margin-left: 6px;
    color: #fff;
`