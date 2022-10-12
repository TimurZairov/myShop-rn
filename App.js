/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import Splash from "./src/screens/auth/Splash";


const App: () => Node = () => {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <Splash />
        </SafeAreaView>
    );
};


export default App;
