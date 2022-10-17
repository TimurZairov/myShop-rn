import React from "react";
import {Image, Text, TouchableOpacity} from "react-native";
import {styles} from "./style";


const ProductBox = ({...item}) => {
    const {title, image, price} = item
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{uri: image}} resizeMode="cover"/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
    )
}

export default ProductBox
