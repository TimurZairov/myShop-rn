import React from "react";
import {FlatList, Text, View} from "react-native";
import Header from "../../../components/Header";
import {products} from "../../../data/products";
import FavoriteItems from "../../../components/FavoriteItems";


const Favorite = ({navigation}) => {
    const renderItem = ({item }) => {

        const productDetailsHandler = () => {
            navigation.navigate('Product', {item})
        }

        return <FavoriteItems productDetailsHandler={productDetailsHandler} {...item} />
    }

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Header title="Favorites" onFavorite/>
            <FlatList data={products} renderItem={renderItem} keyExtractor={item=> String(item?.id)} />
        </View>
    )
}

export default Favorite
