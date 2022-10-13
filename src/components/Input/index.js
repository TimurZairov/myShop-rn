import React, {useState} from "react";
import {Image, Pressable, Text, TextInput, View} from "react-native";
import {styles} from './style'



const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const visiblePasswordHandler = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>
                {label}
            </Text>
            <View style={styles.inputBorder}>
                <TextInput secureTextEntry={isPasswordVisible && isPassword} style={styles.input} placeholder={placeholder} />
                {isPassword ? (
                    <Pressable onPress={visiblePasswordHandler}>
                        <Image style={styles.image} source={ isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png') } />
                    </Pressable>
                ): null}

            </View>
        </View>
    )
}

export default Input
