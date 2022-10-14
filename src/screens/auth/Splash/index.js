import React from "react";
import {Image, Pressable, SafeAreaView, Text, View} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";

const Splash = ({ navigation }) => {

    const onSingUp = () => {
        navigation.navigate('SingUp')
    }
    const onSignIn = () => {
        navigation.navigate('SingIn')
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../assets/Splash.png')} resizeMode={'contain'}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You’ll Find</Text>
                    <Text style={[styles.title, styles.inner]}>All you need</Text>
                    <Text style={styles.title}>Here!</Text>
                </View>

                <Button title={'Sign Up'}  onPress={onSingUp} />
                <Pressable hitSlop={20} style={styles.signIn} onPress={onSignIn}>
                    <Text style={styles.signInTitle}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
export default Splash
