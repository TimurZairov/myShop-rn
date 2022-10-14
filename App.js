import React, {useEffect} from 'react';

import {GoogleSignin} from '@react-native-google-signin/google-signin'; //авторизация с помощью гугла смотреть git
import Config from "react-native-config"; // для исаользования .env библиотека
import {NavigationContainer} from '@react-navigation/native'; //navigation
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Splash from "./src/screens/auth/Splash";
import SingUp from "./src/screens/auth/Singup";
import SingIn from "./src/screens/auth/SingIn";
import {COLORS} from "./src/utils/colors";


const Stack = createNativeStackNavigator()

const App: () => Node = () => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
            client_type: 3
        });
    }, [])

    const theme = {
        colors: COLORS.MAIN_COLOR
    }
    return (

        <NavigationContainer theme={theme}>
            <Stack.Navigator >
                <Stack.Screen  name='Splash' component={Splash}/>
                <Stack.Screen name='SingUp' component={SingUp}/>
                <Stack.Screen name='SingIn' component={SingIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;
