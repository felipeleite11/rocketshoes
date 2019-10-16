import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Icon, withBadge } from 'react-native-elements'
import Icon2 from 'react-native-vector-icons/MaterialIcons'

import { Container, Cart, CartButton, Logo } from './styles'

export default class Header extends Component {
    state = {
        products: [{}]
    }

    handleCartClick = () => {
        Alert.alert(`handleCartClick()`)
    }

    generateBadge = amount => {
        return withBadge(amount, {
            badgeStyle: {
                backgroundColor: '#7159c1'
            }
        })(Icon)
    }

    render() {
        const { products } = this.state

        const BadgedIcon = this.generateBadge(products.length)

        return (
            <Container>
                <Logo source={require('../../assets/logo.svg')} />

                <Cart>
                    <CartButton onPress={this.handleCartClick}>
                        {products.length ? (
                            <BadgedIcon type="material" name="shopping-basket" color="#fff" size={26} />
                        ) : (
                            <Icon2 name="shopping-basket" size={26} color="#fff" />
                        )}
                    </CartButton>
                </Cart>
            </Container>
        )
    }
}
