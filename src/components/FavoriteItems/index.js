import React from "react";
import {Image, Pressable, Text, View, TouchableOpacity} from "react-native";
import {styles} from "./style";
import {COLORS} from "../../utils/colors";

const FavoriteItems = ({title, image, price, productDetailsHandler}) => {
    return (
        <View style={{paddingHorizontal: 22}}>
            <TouchableOpacity onPress={productDetailsHandler} style={{flexDirection: 'row', flex: 1, borderBottomColor: COLORS.BORDER_COLOR, borderBottomWidth: 1, paddingVertical: 8 }}>
                <Image resizeMode="center" style={styles.image} source={{uri: image}} />
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                <Pressable hitSlop={20} >
                    <Image style={styles.delete} source={require('../../assets/delete.png')} />
                </Pressable>
            </TouchableOpacity>
        </View>

    )
}
export default FavoriteItems
