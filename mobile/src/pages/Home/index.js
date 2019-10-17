import React, { Component } from 'react'
import api from '../../services/api'

import Header from '../../components/Header'

import formatCurrency from '../../util/format'

import Icon from 'react-native-vector-icons/Fontisto'

import { Container, ProductList, Product, Name, Price, Image, Button, ButtonLabel, ButtonIconContainer, ButtonLabelContainer, Amount } from './styles'

export default class Home extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const response = await api.get('/products')

        const products = response.data.map(product => ({
            ...product,
            formattedPrice: formatCurrency(product.price)
        }))

        this.setState({ products })
    }

    handleAddCart = product => {
        const { navigation } = this.props
        navigation.navigate('Cart', { product })
    }

    render() {
        const { products } = this.state

        return (
            <>
                <Header navigation={this.props.navigation} />

                <Container>
                    <ProductList
                        data={products}
                        keyExtractor={item => String(item.id)}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <Product>
                                <Image source={{ uri: item.image }} />
                                <Name>{item.name}</Name>
                                <Price>{item.formattedPrice}</Price>
                                <Button onPress={() => this.handleAddCart(item)}>
                                    <ButtonIconContainer>
                                        <Icon name="shopping-basket-add" size={18} color="#fff" />
                                        <Amount>0</Amount>
                                    </ButtonIconContainer>
                                    <ButtonLabelContainer>
                                        <ButtonLabel>ADICIONAR</ButtonLabel>
                                    </ButtonLabelContainer>
                                </Button>
                            </Product>
                        )}
                    />
                </Container>
            </>
        )
    }
}
