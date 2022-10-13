import React from "react";
import {Text, View} from "react-native";
import {styles} from "./style";

const Separator = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>Or sign up with</Text>
            <View style={styles.line}></View>
        </View>
    )
}

export default Separator
