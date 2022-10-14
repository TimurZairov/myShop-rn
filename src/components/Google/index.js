import React from "react";
import {Image, View, TouchableOpacity} from "react-native";
import {styles} from './style'
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


async function onGoogleButtonPress() {
    // Get the users ID token
    try {
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }catch (e) {
        if(e.code === statusCodes.SIGN_IN_CANCELLED){
            //user cancelled the login flow
        } else if(e.code === statusCodes.IN_PROGRESS){
            //operation in progress
        }else if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
            //play services nor available or out date
        }else {
            console.log(e)
        }
    }
}


const Google = () => {
    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onGoogleButtonPress}>
                <Image resizeMode='contain' style={styles.image} source={require('../../assets/Google.png')}/>
            </TouchableOpacity>
        </View>

    )
}

export default Google
