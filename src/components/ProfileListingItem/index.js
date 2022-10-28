import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS} from "../../utils/colors";


const ProfileListingItem = ({label, subLabel }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6}>
            <View>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.subLabel}>{subLabel}</Text>
            </View>
            <Ionicons name="chevron-forward-sharp" size={30} color={COLORS.PRIMARY_COLOR}/>
        </TouchableOpacity>
    )
}

export default ProfileListingItem
