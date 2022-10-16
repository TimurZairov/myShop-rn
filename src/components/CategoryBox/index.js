import React from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import {styles} from "./style";

const CategoryBox = ({title, image }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.image} source={image} />
            </View>
            <Text style={{marginTop: 5, fontSize: 14, fontWeight: '400'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryBox
