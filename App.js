import React, {useEffect} from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin'; //авторизация с помощью гугла смотреть git
import Config from "react-native-config"; // для исаользования .env библиотека
import Splash from "./src/screens/auth/Splash";
import SingUp from "./src/screens/auth/Singup";


const App: () => Node = () => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
        });
    }, [])
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            {/*<Splash />*/}
            <SingUp />
        </SafeAreaView>
    );
};


export default App;
