import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/logo.png')} />
            <Text style={styles.txt}>Elhamuddin Mahmoodi</Text>
            <Text style={styles.txt1}>wolverine.elham@gmail.com</Text>
            <View style={styles.editWrapper}>
                <TouchableOpacity style={styles.editBtn}>
                    <Text style={styles.txt2}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.edit}>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Type" />
                </View>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 80,
        height: 80
    },
    txt: {
        fontWeight: 'bold',
    },
    txt1: {
        fontSize: 10,
        color: '#555',
    },
    editWrapper: {
        marginTop: 20,
    },
    editBtn: {
        backgroundColor: 'green',
        paddingVertical: 5,
        paddingHorizontal: 20,

    },
    txt2: {
        color: '#eee',
    },
    edit: {
        width: '100%',
        padding: 0,
        marginTop: 20,
    },
    inputWrapper: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 5,
        borderColor: '#333',
    },
    input: {
        padding: 0,
    }
})
