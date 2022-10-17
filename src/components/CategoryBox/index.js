import React from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import {styles} from "./style";
import {COLORS} from "../../utils/colors";

const CategoryBox = ({title, image, selectedCategory, selectCategory, index }) => {

    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => selectCategory(index)}>
            {/*получаем id из Home и говорим равный === 0*/}
            <View style={[styles.wrapper,  selectedCategory? {backgroundColor: '#bbecf1'} : {}]}>
                <Image style={styles.image} source={image} />
            </View>
            <Text style={{marginTop: 5, fontSize: 14, fontWeight: '400'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryBox
