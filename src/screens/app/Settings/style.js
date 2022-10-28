import {StyleSheet} from "react-native";
import {COLORS} from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 22,
        backgroundColor: COLORS.MAIN_COLOR,
    },
    personal:{
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text:{
        fontSize: 16,
        fontWeight: '500'
    },
    items: {
        paddingBottom: 15,
        marginTop: 49
    },
    inputContent: {
        marginVertical: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: COLORS.MAIN_COLOR,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: "center"
    },
    inputText: {
        fontSize: 12,
        fontWeight: '400',
        color: COLORS.LIGHT_GREY,
        lineHeight: 12
    },
    input: {
        color: COLORS.PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 14,
    }
})
