import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS} from "../../utils/colors";


const ProfileListingItem = ({label, subLabel, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
            <View>
                <Text style={styles.label}>{label}</Text>
                {subLabel ? <Text style={styles.subLabel}>{subLabel}</Text> : null}

            </View>
            <Ionicons name="chevron-forward-sharp" size={30} color={COLORS.PRIMARY_COLOR}/>
        </TouchableOpacity>
    )
}

export default ProfileListingItem
