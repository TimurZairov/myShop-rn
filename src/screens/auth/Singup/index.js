import React, {useState} from "react";
import {Dimensions, ScrollView, View} from "react-native";
import {styles} from "./style";
import AppHeader from "../../../components/AppHeader";
import Input from "../../../components/Input";
import CheckBox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import Google from "../../../components/Google";
import Account from "../../../components/Account";

const SingUp = () => {
    const width = new Dimensions.get("window")
    const [checked, setChecked] = useState(false)


    return (
        <View style={styles.container}>
            <AppHeader title='Sign Up'/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input label='Name' placeholder='John Doe'/>
                <Input label='E-mail' placeholder='example@gmail.com'/>
                <Input
                    isPassword
                    label='Password'
                    placeholder='*******'
                />
                <CheckBox checked={checked} setChecked={setChecked}/>

                <Button title='Sign Up'/>
                <Separator/>
                <Google/>
                <Account/>
            </ScrollView>

        </View>
    )
}

export default SingUp
