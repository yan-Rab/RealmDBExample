import React, { useState } from 'react'
import {View, Text, TextInput} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' //lock
import FontAwesome from 'react-native-vector-icons/FontAwesome' //user
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' //gmail

import getRealm from '../../database/index'



import styles from './styles'



const AddUser = () => {
    const [dataUser, setDataUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [visibilityPassword, setVisibilityPassword] = useState(true)


   async function handleAddUser(){
         
        const realm = await getRealm();
        realm.write(() => {
            realm.create('users', dataUser)
            console.log(dataUser)
        })
    }
 

    return(
        <View style = {styles.container}>
            <Text style = {styles.description}>Adicione novos usuários aqui!</Text>
            
            <View style = {styles.boxForm}>
                
                <View style = {styles.boxInput}>
                    <FontAwesome name ='user' size = {30} color = '#ff6666'/>
                    <TextInput 
                    value = {dataUser.name}
                    placeholder = 'Nome'
                    onChangeText = {(text) => setDataUser({...dataUser, name: text})} 
                    style = {styles.input}/>
                </View>

                <View style = {styles.boxInput}>
                    <MaterialCommunityIcons name ='gmail' size = {30} color = '#ff6666'/>
                    <TextInput 
                    value = {dataUser.email}
                    placeholder = 'E-mail'
                    onChangeText = {(text) => setDataUser({...dataUser, email: text})} 
                    style = {styles.input}/>
                </View>

                <View style = {styles.boxInput}>
                    <FontAwesome5 name ='lock' size = {30} color = '#ff6666'/>

                    <TextInput 
                    value = {dataUser.password}
                    placeholder = 'Senha'
                    secureTextEntry = {visibilityPassword}
                    onChangeText = {(text) => setDataUser({...dataUser, password: text})} 
                    style = {styles.input}/>

                    <RectButton onPress = {() => setVisibilityPassword(!visibilityPassword)}>
                        <Entypo 
                        name = {visibilityPassword ? 'eye-with-line' : 'eye'} 
                        color = '#ff6666'
                        size = {30} />
                    </RectButton>
                   
                </View>

            </View>
            <RectButton onPress = {handleAddUser} style = {styles.buttonForm}>
                <Text style = {styles.textButton}>Cadastrar</Text>
            </RectButton>
           
        </View>
    )
}

export default AddUser