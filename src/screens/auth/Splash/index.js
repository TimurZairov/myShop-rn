import React from "react";
import {Image, Text, View} from "react-native";
import {styles} from "./styles";

console.log(styles.image)

const Splash = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../../../assets/Splash.png')}/>
            <Text>Splash</Text>
        </View>
    )
}
export default Splash
