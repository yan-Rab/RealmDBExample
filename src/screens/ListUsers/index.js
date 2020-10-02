
import React, { useEffect, useState } from 'react'
import {View, Text, FlatList} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {RectButton} from 'react-native-gesture-handler'
import Foundation from 'react-native-vector-icons/Foundation'
import styles from './styles'

import getRealm from '../../database/index'
import { List } from 'realm'

const LandingListUsers = () => {
    const [listUsers, setListUsers] = useState([])

    

    useEffect(() => {
        async function handleListUser(){
            const realm = await getRealm()
            const response = realm.objects('users')
           
            setListUsers(response)
        }  
        handleListUser()
    }, [listUsers]) 
   
    async function handleDeleteUser(dataUser){
        const realm = await getRealm()
        realm.write(() => {
            const user = realm.objects('users').filtered(`email = "${dataUser.email}"`)
            realm.delete(user)
        })  
 
    }

    const ListEmptyComponent = () => {
        return(
            <View style = {styles.boxListEmpty}>
                <Foundation  name ='clipboard-notes' size = {30} color = '#ff6666'/>
                <Text style = {styles.descriptionEmptyList}>Nenhum cadastro foi encontrado</Text>
            </View>
        )
    }
  
    const renderItemUser = ({item}) => (
        <View style = {styles.boxItem}>
            <View style = {styles.boxIcons}>
                <FontAwesome name = 'user' size = {30} color = '#f3f3f3'/>

                <RectButton 
                style = {styles.buttonDelete} 
                onPress = {() => handleDeleteUser(item)}>

                    <FontAwesome5 
                    name = 'trash-alt' 
                    size = {30}
                    color = '#f3f3f3' 
                    />
                </RectButton>
                
            </View>
            
 
            <View style = {styles.boxInforsUser}>
                <View style = {styles.box}>
                    <Text style = {styles.textTitles}>Nome</Text>
                    <Text style = {styles.textValues}>{item.name}</Text>
                </View>

                <View style = {styles.box}>
                    <Text style = {styles.textTitles}>E-mail</Text>
                    <Text style = {styles.textValues}>{item.email}</Text>
                </View>

                <View style = {styles.box}>
                    <Text style = {styles.textTitles}>Senha</Text>
                    <Text style = {styles.textValues}>{item.password}</Text>
                </View> 
   
                
            </View>
              
        </View>
    )

    return(
        <View style = {styles.container}>

            <Text style = {styles.description}>Lista de cadastros</Text> 
            
            <FlatList
            style = {styles.flatList}
            extraData = {listUsers}
            data = {listUsers}
            renderItem = {renderItemUser}
            ListEmptyComponent = {<ListEmptyComponent />}
            keyExtractor = {item => item.email}
        />
           
        </View>
    )
}

export default LandingListUsers

