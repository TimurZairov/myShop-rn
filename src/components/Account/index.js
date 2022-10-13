import React from "react";
import {Text, View} from "react-native";
import {styles} from "./style";

const Account = ({title}) => {
    return(
        <View>
            <Text style={styles.text}>Already have an account? <Text style={{fontWeight: '700'}}>Sign In</Text> </Text>
        </View>
    )
}

export default Account
