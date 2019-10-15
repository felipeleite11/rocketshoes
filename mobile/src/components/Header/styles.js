import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #17161b;
    height: 60;
    padding-left: 10px;
`

// export const Logo = styled.Image`
//     height: 36px;
//     width: 277px;
//     background: #0f0;
// `

export const Title = styled.Text`
    font-size: 25px;
    color: #fff;
    margin-left: 10px;
`

export const Cart = styled.View`
    width: 60px;
    justify-content: flex-end;
    align-items: center;
`

export const CartButtonLabel = styled.Text`
    color: #fff;
    font-size: 11px;
    margin-right: 6px;
`

export const CartButton = styled.TouchableOpacity`
    flex-direction: row;
    width: 80px;
    align-items: center;
    padding: 8px 10px;
    margin-right: 30px;
`