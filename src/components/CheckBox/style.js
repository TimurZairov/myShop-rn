import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        height: 22,
        flexDirection: 'row',
        marginBottom: 21
    },
    checkBox: {
        width: 22,
        height: 22,
        borderRadius: 4,
        borderColor: COLORS.INPUT_BORDER,
        borderWidth: 1
    },
    checkBoxChecked: {
        backgroundColor: COLORS.INPUT_BORDER,
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        width: 12,
        height: 9
    },
    checkBoxText: {
        fontSize: 14,
        color: COLORS.PRIMARY_COLOR,
        fontWeight: '500',
        marginHorizontal: 14
    },
    checkBoxTextBold: {
        fontWeight: '700'
    }
})
