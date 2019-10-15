import React, { Component } from 'react'
import { Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'

import { Container, Cart, Title, CartButton, CartButtonLabel } from './styles'

// import logo from '../../assets/Logo.svg'

export default class Header extends Component {
    state = {
        products: []
    }

    handleCartClick = () => {
        Alert.alert(`handleCartClick()`)
    }

    render() {
        const { products } = this.state

        return (
            <Container>
                {/* <Logo source={{ uri: logo }} /> */}
                <Title>ROCKETSHOES</Title>
                <Cart>
                    <CartButton onPress={this.handleCartClick}>
                        <CartButtonLabel>{products.length} itens</CartButtonLabel>
                        <Icon name="shopping-basket" size={18} color="#fff" />
                    </CartButton>
                </Cart>
            </Container>
        )
    }
}
