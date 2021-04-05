import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import SingleProduct from '../../components/singleProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import Header from '../../components/Header';

const SingleProductScreen = ({navigation, route}) => {
    const { colors } = useTheme();

    useEffect(() => {
        navigation.setOptions({headerTitle: () => <Header navigation={navigation}  title={route.params.headerTitle} showNav={false} />})
    }, [])

    return (
        <View style={styles.container}>
            <SingleProduct />
            <TouchableOpacity style={styles.desc}>
                <View style={styles.descInner}>
                    <Icon name='info' size={14} color={colors.text} />
                    <Text style={styles.txt}>Description</Text>
                </View>
                <Icon name='double-arrow' size={14} color={colors.text} />
            </TouchableOpacity>

            <View style={styles.btnsWrapper}>
                <TouchableOpacity style={styles.buyNow}>
                    <Text style={{fontWeight:'700'}}>Buy now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCart}>
                    <Text style={styles.addToCartTxt}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleProductScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ccc', 
        flex:1, 
        paddingVertical: 10,
    },
    desc: {
        backgroundColor:'#fff', 
        marginHorizontal: 10, 
        marginVertical:5, 
        borderRadius:5, 
        paddingHorizontal:10, 
        paddingVertical:10, 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    descInner: {
        flexDirection:'row', 
        alignItems:'center'
    },
    txt: {
        fontSize:11, 
        fontWeight:'700', 
        marginLeft:5
    },
    btnsWrapper: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        position:'absolute', 
        bottom:0, 
        width:'96%', 
        left: 6
    },
    buyNow: {
        backgroundColor:'#fff', 
        paddingVertical:5, 
        paddingHorizontal:20, 
        marginBottom:5, 
        width:'38%', 
        alignItems:'center'
    },
    addToCart: {
        backgroundColor:'green', 
        paddingVertical:5, 
        paddingHorizontal:20, 
        marginBottom:5, 
        width:'60%', 
        alignItems:'center'
    },
    addToCartTxt: {
        color:'#fff', 
        fontWeight:'700'
    }
})
