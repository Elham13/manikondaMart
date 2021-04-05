import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ListOfProducts from '../../components/listOfProducts';
import Header from '../../components/Header';
import {getMovies} from '../../api/api';

const CategoryWiseProducts = ({route, navigation}) => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
        navigation.setOptions({headerTitle: () => <Header navigation={navigation}  title={route.params.headerTitle} showNav={false} />})
        const data = await getMovies();
        setMovies(data)
    }, []);

    return (
        <View>
            <ListOfProducts data={movies} />
        </View>
    )
}

export default CategoryWiseProducts;
