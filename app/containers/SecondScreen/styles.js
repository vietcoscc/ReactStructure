import { StyleSheet } from 'react-native'
import { screenWidth } from './../../constants/dimensions'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    screen: {
        width: screenWidth,
        borderRightWidth: 1,
        borderRightColor: 'gray'
    },
    content: {
        fontSize: 30,
        fontStyle: 'italic'
    }
})