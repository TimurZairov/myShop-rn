import {Dimensions, StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    images: {
        width: width,
        height: height * .55
    },
    dots: {
        flexDirection: 'row',
        width: 10,
        height: 5,
        backgroundColor: COLORS.MAIN_COLOR,
        bottom: 60,
        margin: 4,
        borderRadius: 4
    },
    active: {
        backgroundColor: COLORS.FONT_BLACK,
        width: 20
    }
})
