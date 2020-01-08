import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("window");
const dropDownWidth = width - 50;

export default base = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        position: 'relative',
    },
    maxW400: {
        maxWidth: 400
    },
    logo: {
        width: 100,
        height: 100,
        zIndex: 10,
        alignSelf: 'center',
        resizeMode: 'stretch',
        marginTop: 10
    },
    min100vh: {
        minHeight: height
    },
    flexWrap: {
        flexWrap: 'wrap'
    },
    textCenter: {
        textAlign: 'center'
    },
    textRight: {
        textAlign: 'right'
    },
    textDef: {
        color: 'rgb(154, 70, 53)',
    },
    textWhite: {
        color: '#fff'
    },
    textDanger: {
        color: '#dc3545'
    },
    textGray: {
        color: '#747474'
    },
    textSecondary: {
        color: '#6c757d'
    },
    textSuccess: {
        color: '#28a745'
    },
    flex1: {
        flex: 1
    },
    border: {
        borderWidth: 1,
        borderColor: '#f5f5f5'
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: '#f5f5f5'
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: '#f5f5f5'
    },
    bgDef: {
        backgroundColor: '#5f3965'
    },
    bgBlue: {
        backgroundColor: '#6accfd',
    },
    bgGray: {
        backgroundColor: '#e3e2e2',
    },
    bgLightGray: {
        backgroundColor: '#f0f0f0',
    },
    bgWhite: {
        backgroundColor: '#fff',
    },
    bgGreen: {
        backgroundColor: '#00d819'
    },
    mbMenu: {
        marginBottom: 75
    },
    py5: {
        paddingBottom: 5,
        paddingTop: 5
    },
    py10: {
        paddingTop: 10,
        paddingBottom: 10
    },
    py15: {
        paddingTop: 15,
        paddingBottom: 15
    },
    py20: {
        paddingTop: 20,
        paddingBottom: 20
    },
    pb5: {
        paddingBottom: 5
    },
    pb10: {
        paddingBottom: 10
    },
    pr10: {
        paddingRight: 10
    },
    pr30: {
        paddingRight: 30
    },
    pr40: {
        paddingRight: 40
    },
    pl10: {
        paddingLeft: 10
    },
    pl30: {
        paddingLeft: 30
    },
    px10: {
        paddingRight: 10,
        paddingLeft: 10
    },
    px15: {
        paddingRight: 15,
        paddingLeft: 15
    },
    p5: {
        padding: 5
    },
    p10: {
        padding: 10
    },
    p15: {
        padding: 15
    },
    p30: {
        padding: 30
    },
    positionRelative: {
        position: 'relative'
    },
    positionAbsolute: {
        position: 'absolute'
    },
    row: {
        flexDirection: 'row',
    },
    my15: {
        marginBottom: 15,
        marginTop: 15
    },
    my10: {
        marginTop: 10,
        marginBottom: 10
    },
    my5: {
        marginBottom: 5,
        marginTop: 5
    },
    mx10: {
        marginLeft: 10,
        marginRight: 10
    },
    mb5: {
        marginBottom: 5
    },
    mb10: {
        marginBottom: 10
    },
    mr5: {
        marginRight: 5
    },
    mr10: {
        marginRight: 10
    },
    ml5: {
        marginLeft: 5
    },
    ml10: {
        marginLeft: 10
    },
    mt10: {
        marginTop: 10
    },
    mt5: {
        marginTop: 5
    },
    mr0: {
        marginRight: 0
    },
    formControl: {
        borderRadius: 10,
        backgroundColor: '#fff',
        color: '#000',
    },
    formSearchBtn: {
        position: 'absolute',
        right: 5,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        zIndex: 15
    },
    w100: {
        width: '100%'
    },
    h100: {
        height: '100%'
    },
    xsText: {
        fontSize: 8
    },
    smText: {
        fontSize: 10
    },
    mdText: {
        fontSize: 12
    },
    lgText: {
        fontSize: 15
    },
    xlText: {
        fontSize: 20
    },
    text14: {
        fontSize: 14,
    },
    infoColorText: {
        color: '#2f2e2e'
    },
    textBgBlue: {
        backgroundColor: '#6accfd',
        color: '#fff',
        fontSize: 7,
        padding: 5,
        borderRadius: 2
    },
    textBold: {
        fontWeight: '700'
    },
    textItalic: {
        fontStyle: 'italic'
    },
    nav: {
        flex: .5,
        alignItems: 'center'
    },
    navActive: {
        borderBottomWidth: 2,
        borderBottomColor: '#00a9FF'
    },
    textActive: {
        color: '#00a9ff',
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    justifyContentEnd: {
        justifyContent: 'flex-end'
    },
    borderRadius10: {
        borderRadius: 10
    },
    borderRadius20: {
        borderRadius: 20
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    alignSelfEnd: {
        alignSelf: 'flex-end'
    },
    alignSelfCenter: {
        alignSelf: 'center'
    },
    justifyContentBetween: {
        justifyContent: 'space-between'
    },
    icon: {
        width: 30,
        height: 28,
        resizeMode: 'stretch',
    },
    smIcon: {
        width: 13,
        height: 13,
        resizeMode: 'stretch',
    },
    icon2: {
        width: 6.7,
        height: 13.5,
        resizeMode: 'stretch',
    },
    modalDropDown: {
        width: '100%',
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#00a9ff',
    },
    dropDown: {
        width: dropDownWidth,
        marginLeft: -10
    },
    zIndex10: {
        zIndex: 10
    },
    overflowHidden: {
        overflow: 'hidden'
    }
});