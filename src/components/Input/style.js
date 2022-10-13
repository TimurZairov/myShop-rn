import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: COLORS.PRIMARY_COLOR,
        fontWeight: '500'
    },
    inputBorder: {
        borderWidth: 1,
        borderColor: COLORS.INPUT_COLOR,
        borderRadius: 14,
        height: 60,
        paddingHorizontal: 16,
        marginTop: 9,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        flex: 1
    },
    image: {
        width: 24,
        height: 24
    }

})
