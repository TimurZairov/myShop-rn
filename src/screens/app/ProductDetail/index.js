import React from 'react'
import {Image, Text, View, ScrollView, TouchableOpacity} from "react-native";
import {styles} from './style'
import Button from "../../../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS} from "../../../utils/colors";

const ProductDetail = ({route, navigation}) => {
    const {title, image, price, description} = route.params.item

    const goBackHandler = () => {
        navigation.goBack()
    }

    return(
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer} >
                <TouchableOpacity style={styles.backBtn} hitSlop={20} onPress={goBackHandler}>
                    <Ionicons name="chevron-back-outline"  size={30} color={COLORS.PRIMARY_COLOR}/>
                </TouchableOpacity>
                <Image resizeMode='cover' style={styles.image} source={{uri: image}} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </ScrollView>
            <View style={styles.btn}>
                <View style={styles.bookIcon}>
                    <Ionicons name="md-bookmark" size={35}/>
                </View>
                <Button title="Contact Seller" />
            </View>
        </>

    )
}

export default ProductDetail
