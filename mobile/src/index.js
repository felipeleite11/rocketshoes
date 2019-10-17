import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import Routes from './routes'

import './config/reactotronConfig'

//import Header from './components/Header'

export default class App extends Component {
    render() {
        return (
            <>
                <StatusBar 
                    barStyle="light-content" 
                    backgroundColor="#17161b" 
                />
                
                {/* <Header /> */}

                <Routes />
            </>
        )
    }
}
