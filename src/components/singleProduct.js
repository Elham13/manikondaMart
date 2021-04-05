import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
const singleProduct = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.absoluteHead}>
                    <Text style={styles.offer}>Offer</Text>
                    <TouchableOpacity style={styles.wishlist}>
                        <Ionicons name='heart-outline' size={18} color='#eee' />
                    </TouchableOpacity>
                </View>
                <Image style={styles.image} source={require('../assets/veg7.png')} />
                <View style={styles.content}>
                    <Text style={{fontSize: 11}}>Chilli - Green Long, 250g</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.price1}>&#x20B9;10.00</Text>
                        <Text style={styles.price2}>&#x20B9;12.00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default singleProduct;

const styles = StyleSheet.create({
    container: {
        justifyContent:'center', 
        alignItems:'center',
    },
    wrapper: {
        width:width/1.05, 
        padding:10, 
        borderRadius: 5, 
        backgroundColor: '#fff',
    }, 
    absoluteHead: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:'100%', 
        paddingRight:5, 
        position:'absolute', 
        zIndex:20, 
        top:10,
    },
    offer: {
        backgroundColor:'orange', 
        fontSize:10, 
        paddingLeft:2, 
        paddingRight:10, 
        paddingVertical:2, 
        height:18
    },
    wishlist: {
        padding:3, 
        borderWidth:1, 
        borderColor:'#eee', 
        borderRadius:100/2,
    },
    image: {
        width:width/1.12, 
        height:height/2
    },
    content: {
        justifyContent:'center', 
        alignItems:'center', 
        paddingVertical:10, 
        paddingHorizontal:2
    },
    price1: {
        fontSize:11, 
        fontWeight:'700'
    },
    price2: {
        marginLeft:5, 
        fontSize: 11, 
        textDecorationLine:'line-through', 
        textDecorationStyle: 'solid'
    }
})
