import {StyleSheet} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: Number(`${20 + getStatusBarHeight()}`)
    },

    description: {
        fontSize: 18,
        color: '#565656',
        marginTop: 10,
        fontWeight: 'bold'
    },

    flatList: {
        width: '100%',
        padding: 25,
        marginVertical: 15
    },

    boxItem: {
        width: '100%',
        marginTop: 15,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#ff0033',

        borderRadius: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    boxIcons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center'
    },

    boxInforsUser: {
        flexDirection: 'column',
        width: '100%'
    },

    box: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    textTitles: {
        fontSize: 16,
        fontFamily: 'JetBrainsMono-Bold',
        color: 'white',
        fontWeight: 'bold',
      
    },

    textValues: {
        fontSize: 14,
        color: 'white',
        
    },

    buttonDelete: {
        padding: 8,
        borderRadius: 4
    },

    boxListEmpty: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        marginTop: 20,
        padding: 20,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'red'
    },

    descriptionEmptyList: {
        fontSize: 16,
        color: '#565656',
        marginLeft: 10
    }
})

export default styles;