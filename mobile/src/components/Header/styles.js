import styled from 'styled-components/native'
import SvgUri from 'react-native-svg-uri'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #17161b;
    height: 60;
    padding-left: 10px;
`

export const Logo = styled(SvgUri)`
    margin-left: 14px;
`

export const Cart = styled.View`
    width: 60px;
    justify-content: center;
    align-items: center;
`

export const CartButton = styled.TouchableOpacity`
    flex-direction: row;
    width: 80px;
    align-items: center;
    padding: 8px 10px;
`