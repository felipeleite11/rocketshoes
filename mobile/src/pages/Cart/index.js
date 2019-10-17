import React, { Component } from 'react'
import { TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native'

import Header from '../../components/Header'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import { Alert } from 'react-native'

import { Container,
    ProductList,
    Product,
    Image,
    EmptyCartContainer,
    EmptyCartPlaceholderLabel,
    ProductData,
    Name,
    Price,
    Footer,
    Subtotal,
    Amount,
    AmountControl,
    Total,
    TotalLabel,
    TotalValue,
    CheckoutButton,
    CheckoutButtonText } from './styles'

export default class Home extends Component {
    state = {
        products: [
            {id: 1, name: 'Produto 1 dadasd asd asd asdajsdjaksdakjkja jbdbkjdasbdbaskj kabdakjsbkasbdkasd abkdbask', price: 122.50, formattedPrice: 'R$122,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg', amount: 1},
            {id: 2, name: 'Produto 2', price: 122.50, formattedPrice: 'R$122,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg', amount: 2},
            {id: 3, name: 'Produto 2', price: 122.50, formattedPrice: 'R$122,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg', amount: 1},
            {id: 4, name: 'Produto 2', price: 122.50, formattedPrice: 'R$122,50', image: 'https://imgcentauro-a.akamaihd.net/900x900/92408723/tenis-nike-quest-masculino-img.jpg', amount: 1}
        ]
    }

    // componentDidMount() {
        
    // }

    handleDeleteProduct = product => {
        Alert.alert(`handleDeleteProduct(${product.name})`)
    }

    handleIncrementAmount = () => {
        Alert.alert(`handleIncrementAmount()`)
    }

    handleDecrementAmount = () => {
        Alert.alert(`handleDecrementAmount()`)
    }

    render() {
        const { products } = this.state

        return (
            <>
                <Header navigation={this.props.navigation} />

                <Container>
                    <SafeAreaView>
                        <ScrollView>

                            {products.length ? (
                                <ProductList>
                                    {products.map(product => (
                                        <View key={product.id}>

                                            <Product>
                                                <Image source={{ uri: product.image }} />

                                                <ProductData>
                                                    <View>
                                                        <Name>{product.name}</Name>
                                                        <Price>R$123,90</Price>
                                                    </View>

                                                    <TouchableOpacity onPress={() => this.handleDeleteProduct(product)}>
                                                        <Icon name="delete" size={24} color="#7159c1" />
                                                    </TouchableOpacity>
                                                </ProductData>

                                            </Product>

                                            <Footer>
                                                <AmountControl>
                                                    <TouchableOpacity onPress={this.handleDecrementAmount}>
                                                        <Icon2 name="minus-circle" size={26} color="#7159c1" />
                                                    </TouchableOpacity>

                                                    <Amount editable={false} value="1" />

                                                    <TouchableOpacity onPress={this.handleIncrementAmount}>
                                                        <Icon2 name="plus-circle" size={26} color="#7159c1" />
                                                    </TouchableOpacity>
                                                </AmountControl>

                                                <Subtotal>R$123,90</Subtotal>
                                            </Footer>

                                        </View>
                                    ))}

                                    <Total>
                                        <TotalLabel>TOTAL</TotalLabel>
                                        <TotalValue>R$123,90</TotalValue>
                                    </Total>

                                    <CheckoutButton>
                                        <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
                                    </CheckoutButton>

                                </ProductList>
                            ) : (
                                <EmptyCartContainer>
                                    <Icon name="remove-shopping-cart" size={100} color="rgba(0, 0, 0, 0.3)" />
                                    <EmptyCartPlaceholderLabel>Nenhum item no carrinho</EmptyCartPlaceholderLabel>
                                </EmptyCartContainer>
                            )}

                        </ScrollView>
                    </SafeAreaView>
                </Container>
            </>
        )
    }
}
