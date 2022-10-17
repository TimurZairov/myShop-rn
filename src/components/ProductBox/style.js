import {Dimensions, StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";
//ширину экрана берем с помощью Dimension и отнимаем паддинги и марджины
const {width} = Dimensions.get('window')


export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingHorizontal: 10
    },
    image: {
        width: (width - 44) / 2,
        height: 200,
        borderRadius: 8,
        backgroundColor: COLORS.GREY
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.FONT_GREY,
        marginTop: 10
    },
    price: {
        color: COLORS.FONT_BLACK,
        fontWeight: '700',
        fontSize: 14

    }

})
