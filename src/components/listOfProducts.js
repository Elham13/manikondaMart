import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const listOfProducts = ({data, nav}) => {

    return (
        <View>
            <View style={styles.header}>
                <Ionicons name='filter' size={18} />
                <Text style={{marginLeft:5}}>Sort</Text>
            </View>
            <Divider />
            <View> 
                <FlatList 
                    data={data}
                    keyExtractor={(item) => item.key}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <View key={index} style={styles.productsWrapper}>
                            <View style={styles.absoluteHead}>
                                <Text style={styles.absoluteHeadTxt}>Offer</Text>
                                <TouchableOpacity style={styles.wishlistIcon}>
                                    <Ionicons name='heart-outline' size={18} color='#eee' />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image style={styles.allProductsImg} source={{uri: item.poster}} />
                                <TouchableOpacity style={styles.contenWrapper} onPress={() => nav.navigate('SingleProduct', {
                                    headerTitle: 'Something23'
                                })}>
                                <Text style={{fontSize: 11}}>Chilli - Green Long, 250g</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={styles.price1}>&#x20B9;10.00</Text>
                                    <Text style={styles.price2}>&#x20B9;12.00</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default listOfProducts

const styles = StyleSheet.create({
    header: {
        backgroundColor:'#ccc', 
        padding:5, 
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row'
    },
    productsWrapper: {
        borderWidth:2, 
        borderColor:'#ccc'
    },
    absoluteHead: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:'100%', 
        paddingRight:5, 
        position:'absolute', 
        zIndex:2, 
        top:5,
    },
    absoluteHeadTxt: {
        backgroundColor:'orange', 
        fontSize:10, 
        paddingLeft:2, 
        paddingRight:10, 
        paddingVertical:2, 
        height:18 
    },
    wishlistIcon: {
        padding:3, 
        borderWidth:1, 
        borderColor:'#eee', 
        borderRadius:100/2,
    },
    allProductsImg: {
        width:width/2.05, 
        height:height/5,
    },
    contenWrapper: {
        justifyContent:'center', 
        alignItems:'center', 
        paddingVertical:10, 
        paddingHorizontal:2, 
        width:130
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
