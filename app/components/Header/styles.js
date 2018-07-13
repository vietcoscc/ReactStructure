import { StyleSheet } from 'react-native'
import { screenWidth, screenHeight } from './../../constants/dimensions'
const heightRatio = 12;
export default StyleSheet.create({
    containers: {
        width: screenWidth,
        backgroundColor: '#1976D2',
        height: screenHeight / heightRatio
    },
    drawerButton: {
        width: screenHeight / heightRatio,
        height: screenHeight / heightRatio,
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerButtonIcon: {
        width: screenHeight / heightRatio * 1 / 2,
        height: screenHeight / heightRatio * 1 / 2,
    }
})