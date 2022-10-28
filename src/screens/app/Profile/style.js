import {StyleSheet} from "react-native";
import {COLORS} from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.MAIN_COLOR,
        paddingHorizontal: 22
    },
    userName: {
        marginTop: 12,
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.FONT_BLACK
    },
    userEmail: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.GRAY_COLOR,
        marginTop: 8
    }
})
