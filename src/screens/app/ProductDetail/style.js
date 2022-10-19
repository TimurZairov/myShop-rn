import {Dimensions, StyleSheet} from "react-native";
import {COLORS} from "../../../utils/colors";

const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    mainContainer: {
        position: 'relative',
    },
    backBtn: {
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 10,
        width: 40,
        height: 40,
        backgroundColor: COLORS.BORDER_COLOR,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: height * 0.55
    },
    content: {
        width: '100%',
        // height: height - height * 0.55,
        minHeight: height - height * 0.55,
        backgroundColor: COLORS.MAIN_COLOR,
        marginTop: -40,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingVertical: 38,
        paddingHorizontal: 25
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: COLORS.FONT_BLACK
    },
    price: {
        fontSize: 30,
        fontWeight: '700',
        color: COLORS.FONT_BLACK,
        marginTop: 10
    },
    description: {
        fontSize: 14,
        fontWeight: '300',
        color: COLORS.FONT_GREY,
        marginTop: 20,
        lineHeight: 20
    },
    btn: {paddingHorizontal: 22, backgroundColor: COLORS.MAIN_COLOR, paddingVertical: 20, flexDirection: 'row',},
    bookIcon: {
        backgroundColor: COLORS.BORDER_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        borderRadius: 8,
        marginRight: 15
    }
})
