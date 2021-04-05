import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchPage = ({navigation}) => {
    return (
        <View>
            <View style={styles.searchBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome5 name='angle-left' size={18} style={styles.icon} />
                </TouchableOpacity>
                <TextInput style={styles.searchInput}  
                    placeholder="Search"
                />
                <FontAwesome5 name='search' size={14} style={[styles.icon, {color: '#888'}]} />
            </View>
        </View>
    )
}

export default SearchPage;

const styles = StyleSheet.create({
    searchBar: {
        borderWidth: 1,
        borderColor: '#555',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchInput: {
        paddingVertical: 0,
        width: 278,
    },
    icon: {
        paddingHorizontal: 10,
        paddingVertical: 4
    }
})
