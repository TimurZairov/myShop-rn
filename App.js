import React, {useEffect, useState} from 'react';

import {GoogleSignin} from '@react-native-google-signin/google-signin'; //авторизация с помощью гугла смотреть git
import Config from "react-native-config"; // для исаользования .env библиотека
import {NavigationContainer} from '@react-navigation/native'; //navigation
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Splash from "./src/screens/auth/Splash";
import SingUp from "./src/screens/auth/Singup";
import SingIn from "./src/screens/auth/SingIn";
import {COLORS} from "./src/utils/colors";
import Home from "./src/screens/app/Home";
import Favorite from "./src/screens/app/Favorite";
import Profile from "./src/screens/app/Profile";


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Favorite' component={Favorite} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

const App: () => Node = () => {
    const [isSigned, setIsSigned] = useState(false)
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
            client_type: 3
        });
    }, [])

    return (
        <NavigationContainer >
            {isSigned ? <Tabs /> : (
                <Stack.Navigator>
                    <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
                    <Stack.Screen name='SingUp' component={SingUp} options={{headerShown: false}}/>
                    <Stack.Screen name='SingIn' component={SingIn} options={{headerShown: false}}/>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};


export default App;
