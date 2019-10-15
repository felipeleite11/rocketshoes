import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import Cart from './pages/Cart'

const Router = createAppContainer(
    createStackNavigator(
        {
            Home,
            Cart
        }, 
        {
            defaultNavigationOptions: {
                header: null
            },
        }
    )
)

export default Router