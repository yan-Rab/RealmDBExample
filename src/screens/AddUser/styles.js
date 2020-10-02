import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20
    },

    description: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: '#424242',
        fontWeight: 'bold'
    },

    boxForm: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxInput: {
        flexDirection: 'row',
        
        alignItems: 'center',
        padding: 10,
        height: 60,
        width: '80%',
        borderStyle: 'solid',
        borderRadius: 6,
        borderColor: '#ff6666',
        borderWidth: 2,
        marginBottom: 20
    },

    input: {
        flex: 1,
        height: 40,
        fontSize: 15,
        marginLeft: 10
    },

    buttonForm: {
        width: '80%',
        borderRadius: 6,
        height: 60,
        backgroundColor: '#ff6666',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 17,
        fontWeight: 'bold'
    }

    
})

export default styles;