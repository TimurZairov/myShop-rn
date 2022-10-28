import React, {useState} from "react";
import {Text, ScrollView, View, Pressable, TouchableOpacity, Linking, TextInput} from "react-native";
import Header from "../../../components/Header";
import {styles} from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS} from "../../../utils/colors";
import ProfileListingItem from "../../../components/ProfileListingItem";
import Button from "../../../components/Button";

const Settings = ({navigation}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState({name: 'Timur Zairov', email: 'zairovne@gmail.com'})

    const goPrevScreen = () => {
        navigation.goBack()
    }

    const linkHandler = () => {
        Linking.openURL('https://wwww.google.com')
    }

    const inputChangeHandler = () => {
        setIsEditing(true)
    }

    const onChange = (key, value) => {
        // откправляем в функцию ключ и значение, собираем остаток и выдаем новый
        setValue(v => ({...v, [key]: value}))
    }

    const saveHandler = () => {
        setIsEditing(false)
    }

    return (
        <ScrollView style={{flex: 1, backgroundColor: COLORS.MAIN_COLOR}}>
            <Header goBack title="Settings" onPress={goPrevScreen}/>
            <View style={styles.container}>
                <View style={styles.personal}>
                    <Text style={styles.text}>Personal Information</Text>
                    <Pressable hitSlop={20} onPress={inputChangeHandler}>
                        <Ionicons name="create-outline" size={26} color={COLORS.GRAY_COLOR}/>
                    </Pressable>
                </View>
                <View style={styles.inputContent}>
                    <View style={{height: 45}}>
                        <Text style={styles.inputText}>Name</Text>
                        <TextInput style={styles.input} value={value.name} editable={isEditing} onChangeText={ (v) => onChange('name', v)}/>
                    </View>
                </View>
                <View style={styles.inputContent}>
                    <View style={{height: 45}}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput style={styles.input} value={value.email} editable={isEditing} onChangeText={v => onChange('email', v)}/>
                    </View>
                </View>

                {isEditing ? (
                    <View style={{height: 60}}>
                        <Button title="Save" onPress={saveHandler}/>
                    </View>
                ): null}

                <View style={styles.items}>
                    <Text style={styles.text}>Help Center</Text>
                    <TouchableOpacity >
                        <ProfileListingItem label="FAQ" onPress={linkHandler}/>
                        <ProfileListingItem label="Contact Us" onPress={linkHandler}/>
                        <ProfileListingItem label="Privacy & Terms" onPress={linkHandler}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Settings
