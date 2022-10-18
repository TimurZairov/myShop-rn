import React from 'react'
import {Image, Text, View,ScrollView} from "react-native";
import {styles} from './style'
import Button from "../../../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProductDetail = ({route}) => {
    const {title, image, price, description} = route.params.item
    return(
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
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
