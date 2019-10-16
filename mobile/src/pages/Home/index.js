import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/Fontisto'

import { Container, ProductList, Product, Name, Price, Image, Button, ButtonLabel, ButtonIconContainer, ButtonLabelContainer, Amount } from './styles'

export default class Home extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.setState({
            products: [
                {id: 1, name: 'Produto 1 dadasd asd asd asdajsdjaksdakjkja jbdbkjdasbdbaskj kabdakjsbkasbdkasd abkdbask', price: 122.50, formattedPrice: 'R$122,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 2, name: 'Produto 2', price: 133.50, formattedPrice: 'R$133,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 3, name: 'Produto 3', price: 115.50, formattedPrice: 'R$115,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 4, name: 'Produto 4', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 5, name: 'Produto 5', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 6, name: 'Produto 6', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 7, name: 'Produto 7', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 8, name: 'Produto 8', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 9, name: 'Produto 9', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 10, name: 'Produto 10', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 11, name: 'Produto 11', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'},
                {id: 12, name: 'Produto 12', price: 240.50, formattedPrice: 'R$240,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg'}
            ]
        })
    }

    handleAddCart = product => {
        const { navigation } = this.props
        navigation.navigate('Cart', { product })
    }

    render() {
        const { products } = this.state

        return (
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
        )
    }
}
