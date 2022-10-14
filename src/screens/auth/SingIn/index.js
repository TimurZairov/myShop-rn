import React from "react";
import {ScrollView, View} from "react-native";
import {styles} from "./style";
import AppHeader from "../../../components/AppHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import Google from "../../../components/Google";
import Account from "../../../components/Account";

const SingIn = () => {
    return (
        <View style={styles.container}>
            <AppHeader title='Sign Up'/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input label='E-mail' placeholder='example@gmail.com'/>
                <Input
                    isPassword
                    label='Password'
                    placeholder='*******'
                />
                <Button title='Sign In'/>
                <Separator/>
                <Google/>
                <Account/>
            </ScrollView>

        </View>
    )
}

export default SingIn
