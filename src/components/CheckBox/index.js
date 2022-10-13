import React from "react";
import {Image, Pressable, Text, View} from "react-native";
import {styles} from './style'

const CheckBox = ({checked, setChecked}) => {

    const applyCheckBoxHandler = () => {
        setChecked(!checked)
    }

    return (
        <View style={styles.container}>
            {!checked ? <Pressable onPress={applyCheckBoxHandler} style={styles.checkBox}></Pressable> : (
                <Pressable onPress={applyCheckBoxHandler} style={[styles.checkBox, styles.checkBoxChecked]}>
                    <Image style={styles.image} source={require('../../assets/checked.png')}/>
                </Pressable>
            )}
            <Text style={styles.checkBoxText}>I agree with <Text style={styles.checkBoxTextBold}>Terms</Text> & <Text
                style={styles.checkBoxTextBold}>Privacy</Text> </Text>
        </View>
    )
}

export default CheckBox
