import { StyleSheet } from 'react-native'
import { screenWidth, screenHeight } from './../../constants/dimensions'
export default StyleSheet.create({
    containers: {
        width: screenWidth,
        backgroundColor: '#1976D2',
        height: screenHeight / 11
    },
    drawerButton: {
        width: screenHeight / 11,
        height: screenHeight / 11,
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerButtonIcon:{
        width: screenHeight/11*1/2,
        height: screenHeight/11*1/2,
    }
})