import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    ScrollView, 
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getMovies} from '../api/api';

const Home = ({navigation}) => {
    const [moviesData, setMoviesData] = useState([]);

    const handleNav1 = () => {
        navigation.navigate('CategoryWiseProducts', {
            headerTitle: 'Dairy & Bakery'
        })
    }
    const handleNav2 = () => {
        navigation.navigate('CategoryWiseProducts', {
            headerTitle: 'Best Deals'
        })
    }
    const handleNav3 = () => {
        navigation.navigate('SingleProduct', {
            headerTitle: 'Onion'
        })
    }
    const handleNav4 = () => {
        navigation.navigate('CategoryWiseProducts', {
            headerTitle: 'All Products'
        })
    }
    const handleNav5 = () => {
        navigation.navigate('SingleProduct', {
            headerTitle: 'Onion'
        })
    }

    useEffect(async() => {
        const movies = await getMovies();
        setMoviesData(movies);
    }, [])

    return (
        <ScrollView>
            <View style={styles.main}>
                <FlatList 
                    data={moviesData}
                    keyExtractor={(item) => item.key}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <TouchableOpacity onPress={handleNav1}>
                            <View key={index} style={styles.headerScrol}>
                                <Image style={styles.headerImg} source={{uri: item.poster}} />
                                <Text style={{fontSize: 12, fontWeight: '700'}}>{item.title.replace(/ .*/,'')}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />

                <View>
                    <TouchableOpacity onPress={handleNav2}>
                        <View style={styles.sectionHead}>
                            <Text style={styles.sectionHeadTxt}>Best Deals</Text>
                            <Icon name='double-arrow' size={14} />
                        </View>
                    </TouchableOpacity>
                    <FlatList 
                        data={moviesData}
                        keyExtractor={(item) => item.key}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <View style={styles.sectionWrapper}>
                                <View style={styles.absoluteHead}>
                                    <Text style={{backgroundColor:'orange', fontSize:10, paddingLeft:2, paddingRight:10, paddingVertical:2, height:18 }}>Offer</Text>
                                    <TouchableOpacity style={{padding:3, borderWidth:1, borderColor:'#eee', borderRadius:100/2,}}>
                                        <Ionicons name='heart-outline' size={18} color='#eee' />
                                    </TouchableOpacity>
                                </View>
                                <Image style={styles.sectionImg} source={{uri: item.poster}} />
                                <TouchableOpacity style={styles.sectionContent} onPress={handleNav3}>
                                    <Text style={{fontSize: 11}}>Chilli - Green Long, 250g</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={styles.price1}>&#x20B9;10.00</Text>
                                        <Text style={styles.price2}>&#x20B9;12.00</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>

                <View style={{marginTop: 30}}>
                    <TouchableOpacity onPress={handleNav4}>
                        <View style={styles.sectionHead}>
                            <Text style={styles.sectionHeadTxt}>All Products</Text>
                            <Icon name='double-arrow' size={14} />
                        </View>
                    </TouchableOpacity>
                    <FlatList 
                        data={moviesData}
                        keyExtractor={(item) => item.key}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <View style={styles.sectionWrapper}>
                                <View style={styles.absoluteHead}>
                                    <Text style={{backgroundColor:'orange', fontSize:10, paddingLeft:2, paddingRight:10, paddingVertical:2, height:18 }}>Offer</Text>
                                    <TouchableOpacity style={{padding:3, borderWidth:1, borderColor:'#eee', borderRadius:100/2,}}>
                                        <Ionicons name='heart-outline' size={18} color='#eee' />
                                    </TouchableOpacity>
                                </View>
                                <Image style={styles.sectionImg} source={{uri: item.poster}} />
                                <TouchableOpacity style={styles.sectionContent} onPress={handleNav5}>
                                    <Text style={{fontSize: 11}}>Chilli - Green Long, 250g</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={styles.price1}>&#x20B9;10.00</Text>
                                        <Text style={styles.price2}>&#x20B9;12.00</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    main: {
        paddingBottom: 30,
    },
    headerScrol: {
        justifyContent:'center', 
        alignItems: 'center',
        padding: 10,
    },
    headerImg: {
        width: 50, 
        height: 50, 
        marginHorizontal: 0, 
        borderRadius: 100/2
    },
    sectionHead: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 10, 
        paddingTop: 10, 
        borderBottomWidth:0.5, 
        borderBottomColor:'#ccc',
    },
    sectionHeadTxt: {
        borderBottomColor: "#000", 
        borderBottomWidth:1,
        fontWeight: '700', 
        paddingRight: 40
    },
    sectionWrapper: {
        marginHorizontal: 5, 
        marginTop: 5, 
        borderColor: '#ccc',
        borderWidth: 0.5, 
        borderRadius: 5,
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
    sectionImg: {
        width: 130, 
        height: 170, 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
    },
    sectionContent: {
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
