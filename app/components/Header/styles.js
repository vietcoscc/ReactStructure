import { StyleSheet } from 'react-native'
import { screenWidth, screenHeight } from './../../constants/dimensions'
const headerHeight = screenHeight / 11
export default StyleSheet.create({
    containers: {
        flexDirection: 'row',
        width: screenWidth,
        backgroundColor: '#1976D2',
        height: headerHeight
    },
    drawerButton: {
        width: headerHeight,
        height: headerHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerButtonIcon: {
        width: headerHeight * 1 / 2,
        height: headerHeight * 1 / 2,
    },
    title: {
        height: headerHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContent:{
        fontSize:20,
        color:'white',
        fontStyle:'normal'
    }
})