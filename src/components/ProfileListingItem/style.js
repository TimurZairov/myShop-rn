import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        paddingVertical: 18,
        backgroundColor: COLORS.MAIN_COLOR,
        marginTop: 26,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    label: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.PRIMARY_COLOR
    },
    subLabel: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.GRAY_COLOR,
        marginTop: 5
    }
})
