//import liraries
import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../style';
import NavigationService from '../navigators/NavigationService';

import strings from '../strings';


const url1 = require('../assets/images/sideMenu1.png');
const url2 = require('../assets/images/sideMenu2.png');

import { languageSwitcher } from '../helpers/Language';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart'

export default class MusicApp extends Component {

    constructor() {
        super()
        this.state = {
            subscribe: true,
            expand: false,
            imgURL: url1,
        }
    }

    componentDidMount = async () => {
        StatusBar.setHidden(true);
        // const langCode = await languageSwitcher.getCurrentLanguageCode();
        // let langCode = await AsyncStorage.getItem('languageCode')
        // await languageSwitcher.switchTo(langCode);
        // alert(langCode);
        // setTimeout(() => RNRestart.Restart(), 10);
    }

    async UNSAFE_componentWillMount() {
        // alert('UNSAFE_componentWillMount')
        // const langCode = await languageSwitcher.getCurrentLanguageCode();
        let langCode = await AsyncStorage.getItem('languageCode')
        await languageSwitcher.switchTo(langCode);
        // setTimeout(() => RNRestart.Restart(), 10);
    }


    render() {
        return (
            <ImageBackground
                source={require('../assets/images/login3.png')}
                resizeMode={'stretch'}
                style={{ height: '100%', flex: 1 }}>
                <LinearGradient colors={['rgba(0,0,0,0)', '#e207b0']} style={{ position: 'absolute', bottom: 0, width: '100%', height: 200 }} />
                <View style={styles.txtGroup}>
                    <View style={styles.txtBox}>
                        <Text style={styles.txt}>
                            {strings.youarealready}
                            {'\n'}{strings.pleaseenteryourmobile}
                        </Text>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={{ color: 'white', paddingBottom: 10 }}>{strings.enterphone}</Text>
                        <View style={styles.phoneInput}>
                            <Icon name="phone" size={20} style={styles.menu} color="black" />
                            <TextInput keyboardType='phone-pad' style={styles.phone} />
                        </View>
                        <TouchableOpacity onPress={() => {
                            // alert(strings.price);
                            NavigationService.navigate('Login2');
                            // this.props.drawer.current.close(); 
                        }} style={styles.Btn} activeOpacity={0.7}>
                            <Text style={{ color: 'white' }}>{strings.gotohomepage}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}