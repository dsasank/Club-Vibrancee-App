import { StyleSheet } from "react-native";
const EventInfocss = StyleSheet.create({
    Pagecss: {
        backgroundColor: "#171211"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
    },
    buttons: {
        flex: 0.5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 20,
        backgroundColor: "#5F0941",
        borderRadius: 50,

    },
    Events: {
        padding: 10,
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 18,
        alignSelf: "center",
        textAllign: "center",
        letterSpacing: -0.165,

        color: "#FFFFFF",

    },
    Image1: {
        width: 360,
        height: 230,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        paddingBottom: 20,
    },
    EventName: {
        paddingLeft: 10,
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 30,
        color: "#FFFFFF",

    },
    ClubName: {
        paddingLeft: 15,
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,

        color: "#FFFFFF",
    },
    Brochure: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 154,
        height: 40,
        backgroundColor: "#5F0941",
        borderRadius: 25,
    },

    ButtonText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 24,
        color: "#FFFFFF",
    },
    date1: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 14,
        lineHeight: 21,
        color: "#F1F6FA",
        paddingLeft: 15,
        paddingTop: 15,
    },
    time: {
        marginRight: "12%",
    },
    RegisterButton: {
        display: "flex",
        flexDirection: "row",
        justifCcontent: "center",
        alignSelf: "center",
        marginTop: 70,
        textAlign: "center",
        width: 320,
        height: 51.43,
        backgroundColor: "#B13F7F",
        borderRadius: 20,
    },
    Registerhere: {
        paddingLeft: 15,
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
        alignSelf: "center",
        paddingLeft: "35%",
        color: "#FFFFFF",

    }
})
export default EventInfocss