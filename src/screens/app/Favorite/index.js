import React from "react";
import {FlatList, Text, View} from "react-native";
import Header from "../../../components/Header";
import {products} from "../../../data/products";
import FavoriteItems from "../../../components/FavoriteItems";
const Favorite = () => {

    const renderItem = ({item, index}) => {
        return <FavoriteItems {...item} />
    }

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Header title="Favorites" onFavorite/>
            <FlatList data={products} renderItem={renderItem} keyExtractor={item=> String(item?.id)} />
        </View>
    )
}

export default Favorite
