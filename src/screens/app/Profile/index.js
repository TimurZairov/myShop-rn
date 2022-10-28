import React from 'react'
import {Text, View} from "react-native";
import Header from "../../../components/Header";


import {styles} from './style'
import ProfileListingItem from "../../../components/ProfileListingItem";
import Button from "../../../components/Button";


const Profile = ({navigation}) => {

    const goToSettings = () => {
        navigation.navigate('Settings')
    }

    const num = 10
    return (
        <View style={styles.container}>
            <Header title="Profile" onLogOut />
            <View style={{flex: 1}}>
                <Text style={styles.userName}>Timur Zairov</Text>
                <Text style={styles.userEmail}>zairovne@gmail.com</Text>
                <ProfileListingItem label="My Listings" subLabel={`Already have ${num} listing`}/>
                <ProfileListingItem onPress={goToSettings} label="Settings" subLabel="Account, FAQ, Contact"/>
            </View>
            <View style={{height: 60, marginBottom: 32}}>
                <Button title="Add a new listing" />
            </View>
        </View>
    )
}

export default Profile
