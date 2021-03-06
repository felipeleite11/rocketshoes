import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from './styles'

import logo from '../../assets/logo.svg'

function Header({ cartLength }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartLength} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    )
}

export default connect(state => ({
    cartLength: state.cart.length //Nome do reducer cadastrado em rootReducer.js
}))(Header)