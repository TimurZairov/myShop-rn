import  {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    topNavigate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54
    },
    topNavigateBackImage: {
        width: 18,
        height: 18
    },
    topNavigateTitle: {
        color: COLORS.PRIMARY_COLOR,
        fontSize: 26,
        fontWeight: '700',
        paddingHorizontal: 16
    }
})
