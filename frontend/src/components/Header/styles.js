import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
`

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
        opacity: 0.7;
        transition: opacity 0.2s;
    }
    
    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #FFF;
            font-size: 12px;
        }

        span {
            color: #999;
            font-size: 11px;
        }
    }
`