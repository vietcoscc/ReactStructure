import { StyleSheet } from 'react-native'
import { screenWidth, screenHeight } from './../../constants/dimensions'
export default StyleSheet.create({
    containers: {
        width: screenWidth,
        backgroundColor: 'blue',
        height: screenHeight / 10
    },
    drawerButton: {
        width: screenHeight / 10,
        height: screenHeight / 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})