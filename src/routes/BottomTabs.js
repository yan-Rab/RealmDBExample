import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import AddUser from '../screens/AddUser';
import LandingListusers from '../screens/ListUsers'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const BottomTabs = () => {
    const {Navigator,Screen} = createBottomTabNavigator()

    return(
        <Navigator
        tabBarOptions = {{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 60
            },
            tabStyle: {
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center'
            },

            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
                
            },

            activeBackgroundColor: '#ff6666',
            inactiveBackgroundColor: '#e2e2e2',
            activeTintColor: 'white',
            inactiveTintColor: '#6c6c6c'
            
        }}>
            <Screen 
            name = 'AddUser' 
            component = {AddUser} 
            options = {{
                tabBarLabel: '',
                tabBarIcon: ({color,focused,size}) => {
                    return <AntDesign name = 'adduser' size = {size} color = {focused ? 'white' : color} />
                }
            }}/>

            <Screen 
            name = 'ListUsers' 
            component = {LandingListusers} 
            options = {{
                tabBarLabel: '',
                tabBarIcon: ({color,focused,size}) => {
                    return <FontAwesome name= 'users' size = {size} color = {focused ? 'white' : color} />
                }
            }}
            />
        </Navigator>
    )
}

export default BottomTabs