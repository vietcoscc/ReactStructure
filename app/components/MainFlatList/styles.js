import { StyleSheet } from 'react-native'
import { screenWidth, screenHeight } from '../../constants/dimensions'
export default StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: 'blue'
    },
    flatListItem: {
        flex: 1,
        flexDirection: 'row',
        height: screenHeight / 7,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderTopWidth: 1
    },
    image: {
        flex: 3,
        height: screenHeight / 7,
        resizeMode: 'contain'
    },
    content: {
        flex: 7,
        padding:5
    },
    title: {
        color: 'black',
        fontSize: 15
    },
    desciption: {
        fontSize: 10
    },
    others: {
        flex: 1,
        flexDirection: 'row',
    },
    type: {
        fontSize: 10,
        color: 'red'
    },
    author: {
        fontSize: 10,
        color: 'red'
    },
    timeStamp: {
        fontSize: 10,
    }
})