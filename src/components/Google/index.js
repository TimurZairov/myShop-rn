import React from "react";
import {Image, View} from "react-native";
import {styles} from './style'

const Google = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <View style={styles.container}>
                <Image resizeMode='contain' style={styles.image} source={require('../../assets/Google.png')}/>
            </View>
        </View>

    )
}

export default Google
