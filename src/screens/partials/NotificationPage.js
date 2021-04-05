import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const NotificationPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.disapointed}>
                <Image style={styles.img} source={require('../../assets/sadGirl.png')} />
                <Text style={styles.txt}>Nothing to show yet!</Text>
            </View>
        </View>
    )
}

export default NotificationPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disapointed: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 130,
    },
    txt: {
        color: '#999'
    }
})
