import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {styles} from "./style";
const Button = ({ title, onPress }) => {

    return (
        <TouchableOpacity activeOpacity={.7} style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button)
