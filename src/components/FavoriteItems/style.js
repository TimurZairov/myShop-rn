import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5,
        color: COLORS.FONT_GREY
    },
    price: {
        color: COLORS.FONT_BLACK,
        fontSize: 16,
        fontWeight: '700'
    },
    delete: {
        width: 24,
        height: 24
    }
})
