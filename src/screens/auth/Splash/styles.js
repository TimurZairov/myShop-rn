import {StyleSheet} from "react-native";
import {COLORS} from '../../../utils/colors'

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        alignItems: "center",
        justifyContent: 'center',
        height: '100%',
        borderColor: 'black',
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        paddingVertical: 45
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#303030',
        textAlign: 'center'
    },
    inner: {
        color: COLORS.ORANGE_COLOR,
        textDecorationLine: 'underline'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        color: COLORS.PRIMARY_COLOR
    }
})
