import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './routes'

import Header from './components/Header'

const App = () => {
    return (
        <>
            <StatusBar 
                barStyle="light-content" 
                backgroundColor="#17161b" 
            />
            
            <Header />

            <Routes />
        </>
    )
}

export default App
