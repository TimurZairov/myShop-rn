import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        width: '45%',
        backgroundColor: COLORS.DARK_GREY,
        paddingHorizontal: 56,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        marginBottom: 50
    },
    image: {
        width: 28,
        height: 28,
    }
})
