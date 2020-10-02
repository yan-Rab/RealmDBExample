import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import BottomTabs from './BottomTabs'

const AppStack = () => {
    const {Navigator, Screen} = createStackNavigator()
    
    return(
        <NavigationContainer>
            <Navigator  screenOptions = {{headerShown: false}}>
                <Screen name = 'BottomTabs' component = {BottomTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack