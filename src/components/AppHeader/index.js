import React from "react";
import {Image, Pressable, Text, View} from "react-native";
import {styles} from "./style";

const AppHeader = ({title, onPress}) => {
    return (
        <View style={styles.topNavigate}>
            <Pressable hitSlop={20} onPress={onPress}>
                <Image style={styles.topNavigateBackImage} source={require('../../assets/back_arrow.png')} />
            </Pressable>
            <Text style={styles.topNavigateTitle}>{title}</Text>
        </View>
    )
}

export default AppHeader
