import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    listGroup: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 150,
    },
    textList: {
        marginVertical: 10,
        color: 'white'
    },
    txt: {
        lineHeight: 20,
        textShadowColor: '#000',

    },
    txtBox: {
        marginTop: 150,
        backgroundColor: 'white',
        opacity: 0.8,
        padding: 15,
        borderRadius: 10,
        lineHeight: 20,
        elevation: 50,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 30,
        shadowOffset: {
            width: 50,
            height: 50
        },
    },
    txtBox1: {
        marginTop: 30,
        backgroundColor: 'white',
        opacity: 0.8,
        padding: 15,
        borderRadius: 10,
        lineHeight: 20,
        elevation: 50,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 30,
        shadowOffset: {
            width: 50,
            height: 50
        },
    },
    txtGroup: {
        width: '60%',
        marginLeft: '10%',
    },
    txtGroup1: {
        width: '85%',
        marginLeft: '7.5%',
    },
    formGroup: {
        marginTop: 30,
    },
    phone: {
        width: '85%',
        paddingBottom: 8
    },
    phoneInput: {
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        opacity: 0.7,
        height: 35,
        borderRadius: 20,
        backgroundColor: 'white'
    },
    songItem: {
        alignItems: "center",
        flexDirection: "row",
        height: 80,
        width: '100%',
        borderRadius: 20,
        marginBottom: 10
    },
    menu: {
        marginLeft: 10
    },
    Btn: {
        marginTop: 10,
        borderRadius: 40,
        color: 'white',
        backgroundColor: '#f0d',
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    resend: {
        backgroundColor: '#191636',
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 10,
        alignItems: "center",
        elevation: 10
    },
    contain: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: 'white'
    },
    weekGroup: {
        marginTop: 50,
        width: '80%',
        marginLeft: '10%',
        height: height * 0.5,
        alignItems: "center",
    },
    creditBox: {
        backgroundColor: '#aaa',
        width: '100%',
        paddingVertical: 8,
        borderRadius: 30,
        alignItems: "center",
        height: 35,
        opacity: 0.7
    },
    yourCredit: {
        color: 'white',
        marginTop: -27
    },
    weekBox: {
        width: '100%',
        height: height * 0.4,
        backgroundColor: '#aaa',
        opacity: 0.7,
        marginTop: 20,
        borderRadius: 20
    },
    weekboxContent: {
        width: '80%',
        marginTop: -height * 0.4,
        flexDirection: "column",
    },
    weeklybox: {
        flexDirection: "row",
        marginTop: 35,
        height: 120,
        marginBottom: 15
    },
    Biweekly: {
        width: '50%',
        backgroundColor: 'rgb(203,14,160)',
        alignItems: "center",
        justifyContent: 'flex-end',
        paddingBottom: 20,
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        elevation: 10
    },
    weekly: {
        width: '50%',
        backgroundColor: '#888',
        opacity: 0.7,
        alignItems: "center",
        justifyContent: 'flex-end',
        paddingBottom: 20,
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9,
        elevation: 10
    },
    resendBox: {
        backgroundColor: '#aaa',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 15,
        alignItems: "center",
        height: 100,
        opacity: 0.7
    },
    resendPwd: {
        marginTop: -80,
        color: 'white',
    },
    resendBtn: {
        marginTop: 10,
        borderRadius: 40,
        color: 'white',
        backgroundColor: '#f0d',
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        width: '80%'
    },
    bottombar: {
        position: 'absolute',
        width: "100%",
        height: 80,
        bottom: 0,
    },
    bottomTabView: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
    searchArea: {
        height: 80,
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: '#ddd',
        borderBottomWidth: 3,
    },
    searchView: {
        marginTop: 80
    },
    searchArea1: {
        height: 80,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    menu: {
        marginHorizontal: 10
    },
    srhInputArea: {
        borderWidth: 1,
        borderColor: '#888',
        width: '90%',
        marginHorizontal: 10,
        height: 36,
        borderRadius: 18,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center"
    },
    srhInputArea1: {
        borderWidth: 1,
        borderColor: '#888',
        width: '75%',
        marginRight: 10,
        height: 36,
        borderRadius: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    srhInput: {
        width: '80%',
        marginLeft: 18,
        paddingBottom: 8
    },
    srhInput1: {
        width: '70%',
        marginLeft: 5,
        paddingBottom: 8,
    },
    songTxt: {
        fontSize: 17,
        marginLeft: 15
    },
    songImage: {
        width: '100%',
        flex: 1
    },
    sideImage: {
        width: '50%'
    },
    headerView: {
        backgroundColor: '#4e4a4d',
        marginTop: 30,
        opacity: 0.7,
        width: '80%',
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15
    },
    headerTxt: {
        fontSize: 35,
        color: '#fff',
        marginTop: 20
    },
    headerTxt1: {
        color: '#fff',
        fontSize: 18,
    },
    touchMenu: {
        marginTop: 30,
        marginLeft: -10
    },
    container: {
        flex: 1,
        backgroundColor: "#EAEAEC"
    },
    textLight: {
        color: "#B6B7BF"
    },
    text: {
        color: "#8E97A6"
    },
    textDark: {
        color: "#3D425C"
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
        shadowColor: "#5D3F6A",
        shadowOffset: { height: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    track: {
        height: 2,
        borderRadius: 1,
        backgroundColor: "#FFF"
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: "#3D425C"
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: "500"
    },
    playButtonContainer: {
        backgroundColor: "#FFF",
        borderColor: "rgba(93, 63, 106, 0.2)",
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 32,
        shadowColor: "#5D3F6A",
        shadowRadius: 30,
        shadowOpacity: 0.5
    },
    searchBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 30,
        marginBottom: 40,
    },
    searchBtnItem: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        height: 30,
        backgroundColor: '#0f0',
    },
    searchBtnItem1: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        height: 30,
        borderWidth: 2,
        borderColor: '#0f0'
    },
    main: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.85)',
        width: '90%',
        marginLeft: '5%',
        marginVertical: 10,
        borderRadius: 10
    },
    categoryGroup: {
        flexDirection: "row",
        width: '90%',
        justifyContent: 'space-around',
        marginLeft: '5%',
        marginVertical: 20
        
    },
    clickedBtn: {
        backgroundColor:'#d0d',
        paddingVertical: 3,
        width: '23%',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor:'#d0d',
        elevation: 8
    },
    NormalBtn: {
        backgroundColor:'#fff',
        paddingVertical: 3,
        width: '23%',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor:'#888',
    },
    borderImage: {
        borderRadius: 15,
        width: '100%',
        height: 140,
        resizeMode: 'stretch',
    },
    borderImage1: {
        borderRadius: 6,
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
    },
    borderImageGroup: {
        borderRadius: 15,
        width: '30%',
        height: 140,
        margin: 5,
        elevation: 5,
        backgroundColor: 'white'
    },
    borderImageGroup1: {
        borderRadius: 15,
        width: '25%',
        height: 150,
        margin: 5,
        elevation: 5,
        backgroundColor: 'white'
    },
    imgName: {
        fontSize: 12,
        width: 70,
        paddingVertical: 2,
        color: 'white',
        backgroundColor: '#0aa',
        marginTop: -30,
        borderRadius: 20,
        alignItems: "center",
        paddingHorizontal: 15
    },
    IqdTxt: {
        fontSize: 25,
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 25,
        marginTop: 10,
        backgroundColor: '#43a3af',
        width: 200
    },
    largePlay: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#bdada6',
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    downBottom: {
        marginTop:30,
        width: '100%',
        height: 230,
        backgroundColor: '#bdada6',
        opacity: 0.9,
        borderRadius:20,
    },
    inputTxt:{
        width:'100%',
        height:35,
        backgroundColor:'#756872',
        borderRadius:18,
    },
    giftBtn:{
        width:'90%',
        marginLeft:'5%',
        height:35, 
        marginTop:35,
        backgroundColor:'#0b091b',
        borderRadius:18,
        justifyContent: 'center',
        alignItems:"center",
        marginBottom:20
    },
    giftBtn1:{
        width:'90%',
        height:40, 
        marginLeft:'5%',
        marginTop:35,
        backgroundColor:'#0b091b',
        opacity:0.9,
        borderRadius:20,
        justifyContent: 'center',
        alignItems:"center",
        marginBottom:20
    },
    giftBtn2:{
        width:'42%',
        height:40, 
        marginLeft:'5%',
        marginTop:35,
        backgroundColor:'#0b091b',
        opacity:0.9,
        borderRadius:20,
        justifyContent: 'center',
        alignItems:"center",
        marginBottom:20
    },
    giftBtn3:{
        width:'42%',
        height:40, 
        marginLeft:'5%',
        marginTop:35,
        backgroundColor:'#fff',
        opacity:0.9,
        borderRadius:20,
        justifyContent: 'center',
        alignItems:"center",
        marginBottom:20
    },
    downMedium:{ 
        flexDirection: "row", 
        alignItems: "center", 
        marginTop: '40%', 
        width: '90%', 
        marginLeft:'5%',
        justifyContent: 'space-between'
    },
    bottomArea: {
        flex:2.5,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:'#ece6ea'
    },
    downBtnTxt:{
        fontSize: 18, 
        color: '#f00', 
        letterSpacing: 3 
    },
    downBtnTxt1:{
        fontSize: 18, 
        color: '#f00', 
        letterSpacing: 3 
    }
});

export default styles;