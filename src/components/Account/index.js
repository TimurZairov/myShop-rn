import React from "react";
import {Pressable, Text} from "react-native";
import {styles} from "./style";

const Account = ({onPress}) => {
    return(
        <Pressable hitSlop={20} onPress={onPress}>
            <Text style={styles.text}>Already have an account? <Text style={{fontWeight: '700'}}>Sign In</Text> </Text>
        </Pressable>
    )
}

export default Account
