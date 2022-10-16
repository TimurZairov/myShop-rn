import React, {useEffect, useState} from 'react';

import {GoogleSignin} from '@react-native-google-signin/google-signin'; //авторизация с помощью гугла смотреть git
import Config from "react-native-config"; // для исаользования .env библиотека
import {NavigationContainer} from '@react-navigation/native'; //navigation
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


//https://www.npmjs.com/package/react-native-vector-icons#android
//read top url to add icons
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
            <Tab.Screen name='Home' component={Home} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    if (focused) {
                        return <Ionicons name="home" size={25} color={COLORS.PRIMARY_COLOR}/>
                    } else {
                        return <Ionicons name="home" size={25} color={COLORS.GRAY_COLOR}/>
                    }
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name='Favorite' component={Favorite} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return <Ionicons
                        name="md-bookmark"
                        size={25}
                        color={focused ? COLORS.PRIMARY_COLOR : COLORS.GRAY_COLOR} />
                },
                tabBarShowLabel: false
            }}/>
            <Tab.Screen name='Profile' component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return <Ionicons name="person-sharp" size={25} color={focused ? COLORS.PRIMARY_COLOR : COLORS.GRAY_COLOR} />
                },
                tabBarShowLabel: false
            }}/>
        </Tab.Navigator>
    )
}

const App: () => Node = () => {
    const [isSigned, setIsSigned] = useState(true)
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: Config.GOOGLE_WEB_CLIENT_ID,
            client_type: 3
        });
    }, [])

    return (
        <NavigationContainer>
            {isSigned ? <Tabs/> : (
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
