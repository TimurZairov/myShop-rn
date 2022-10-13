import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.LIGHT_GREY
    },
    text: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.PRIMARY_COLOR,
        marginHorizontal: 3
    }
})
