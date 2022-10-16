import  {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 22,
        backgroundColor: COLORS.MAIN_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topNavigateImage: {
        width: 24,
        height: 24
    },
    topNavigateTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    },
    emptyBox: {
        width: 24,
        height: 24
    }
})
