import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    buttonContainer: {
        height: 60,
        backgroundColor: COLORS.PRIMARY_COLOR,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    buttonTitle: {
        color: COLORS.MAIN_COLOR,
        fontSize: 16,
        fontWeight: 'bold'
    }
})
