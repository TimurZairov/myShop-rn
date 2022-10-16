import React, {useState} from "react";
import {Image, Pressable, Text, View} from "react-native";
import {styles} from "./style";
import Input from "../Input";
import {COLORS} from "../../utils/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppHeader = ({title, onPress, onSearch, onLogOut, goBack}) => {
    const [showSearch, setShowSearch] = useState(false)

    const onSearchClick = () => {
        setShowSearch(s => !s)
    }

    return (
        <View>
            <View style={styles.container}>
                {onSearch ? (
                    <>
                        <Pressable hitSlop={20} onPress={onSearchClick}>
                            <Ionicons name="search" size={24} color={COLORS.PRIMARY_COLOR}/>
                        </Pressable>
                        <Text style={styles.topNavigateTitle}>{title}</Text>
                        <View style={styles.emptyBox}></View>
                    </>
                ) : goBack ? (
                    <>
                        <Pressable hitSlop={20}>
                            <Ionicons name="arrow-back" size={24} color={COLORS.PRIMARY_COLOR}/>
                        </Pressable>
                        <Text style={styles.topNavigateTitle}>{title}</Text>
                        <View style={styles.emptyBox}></View>
                    </>
                ) : null}

                {/*    LogOut*/}
                {onLogOut && (
                    <>
                        <View style={styles.emptyBox}></View>
                        <Text style={styles.topNavigateTitle}>{title}</Text>
                        <Pressable hitSlop={20}>
                            <Ionicons name="exit-outline" size={24} color={COLORS.PRIMARY_COLOR}/>
                        </Pressable>
                    </>
                )}
            </View>
            <View style={{backgroundColor: COLORS.MAIN_COLOR, paddingHorizontal: 22}}>
                {showSearch && <Input placeholder="Type your keyword..." label="Search"/>}
            </View>
        </View>

    )
}

export default AppHeader