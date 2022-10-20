import React from 'react'
import {Image, Text, View, ScrollView, TouchableOpacity, Linking} from "react-native";
import {styles} from './style'
import Button from "../../../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS} from "../../../utils/colors";
import Carousel from "../../../components/Carousel";


const ProductDetail = ({route, navigation}) => {
    const {title, image, price, description, images} = route.params.item
    const goBackHandler = () => {
        navigation.goBack()
    }

    const onContact = () => {
        //make call
        Linking.openURL('tel: +998999999999')
        //Send email
        // Linking.openURL('mailto: asd@gmail.com')
    }

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
                <TouchableOpacity style={styles.backBtn} hitSlop={20} onPress={goBackHandler}>
                    <Ionicons name="chevron-back-outline" size={30} color={COLORS.PRIMARY_COLOR}/>
                </TouchableOpacity>
                {images?.length ? <Carousel images={images} /> : <Image resizeMode='cover' style={styles.image} source={{uri: image}}/>}

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
                <Button onPress={onContact} title="Contact Seller"/>
            </View>
        </>

    )
}

export default ProductDetail
