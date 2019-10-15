import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/Fontisto'

import { Container, ProductList, Product, Image, EmptyCartContainer, EmptyCartPlaceholderLabel } from './styles'

export default class Home extends Component {
    state = {
        products: []
    }

    // componentDidMount() {
        
    // }

    render() {
        const { products } = this.state

        return (
            <Container>
                {products.length ? (
                    <ProductList>
                        <Product>
                            <Image source={{ uri: products[0].image }} />
                        </Product>
                    </ProductList>
                ) : (
                    <EmptyCartContainer>
                        <Icon name="shopping-basket" size={60} color="#fff" />
                        <EmptyCartPlaceholderLabel>Nenhum item no carrinho</EmptyCartPlaceholderLabel>
                    </EmptyCartContainer>
                )}

                {/* <ProductList
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
                                    <Icon name="ios-add-circle-outline" size={24} color="#fff" />
                                    <Amount>0</Amount>
                                </ButtonIconContainer>
                                <ButtonLabelContainer>
                                    <ButtonLabel>ADICIONAR</ButtonLabel>
                                </ButtonLabelContainer>
                            </Button>
                        </Product>
                    )}
                /> */}
            </Container>
        )
    }
}
