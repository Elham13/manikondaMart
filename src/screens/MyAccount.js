import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyAccount = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.btn, {marginTop: 10}]}>
                <View style={styles.left}>
                    <Icon name="shopping-cart" size={14} color="#333" />
                    <Text style={styles.txt}>Order History</Text>
                </View>
                <Icon name="double-arrow" size={12} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.left}>
                    <Icon name="account-circle" size={14} color="#333" />
                    <Text style={styles.txt}>My Profile</Text>
                </View>
                <Icon name="double-arrow" size={12} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.left}>
                    <Icon name="lock-open" size={14} color="#333" />
                    <Text style={styles.txt}>Change Password</Text>
                </View>
                <Icon name="double-arrow" size={12} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.left}>
                    <Icon name="my-location" size={14} color="#333" />
                    <Text style={styles.txt}>My Addresses</Text>
                </View>
                <Icon name="double-arrow" size={12} color="#333" />
            </TouchableOpacity>
        </View>
    )
}

export default MyAccount;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 3,
        backgroundColor: '#555',
        paddingVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#333',
        fontSize: 11
    }
})
