import { StyleSheet } from 'react-native'
import { screenWidth, screenHeight } from './../../constants/dimensions'
const modalWidth = screenWidth * 3 / 4
const modalHeight = screenHeight / 3
export default StyleSheet.create({
    containers: {
        borderRadius: 3,
        width: modalWidth,
        backgroundColor: 'white',
        height: modalHeight
    },
    header: {
        flex: 1,
        width: modalWidth,
        borderBottomWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContent: {
        fontSize: 30
    },
    modalContent: {
        flex: 3
    }
})