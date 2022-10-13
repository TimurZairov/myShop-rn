import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import Splash from "./src/screens/auth/Splash";
import SingUp from "./src/screens/auth/Singup";


const App: () => Node = () => {

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            {/*<Splash />*/}
            <SingUp />
        </SafeAreaView>
    );
};


export default App;
