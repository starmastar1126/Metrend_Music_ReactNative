//import liraries
import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../style';
import NavigationService from '../navigators/NavigationService';
import strings from './strings';



const url1 = require('../assets/images/sideMenu1.png');
const url2 = require('../assets/images/sideMenu2.png');
const height = Dimensions.get('window').height;

export default class MusicApp extends Component {

    constructor() {
        super()
        this.state = {
            subscribe: true,
            expand: false,
            imgURL: url1,
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/images/login3.png')}
                resizeMode={'stretch'}
                style={{ height: '100%', flex: 1 }}>
                <View style={styles.contain}>
                    <View style={styles.weekGroup}>
                        <View style={styles.resendBox}>
                        </View>
        <Text style={styles.resendPwd}>{strings.youwillreceive}</Text>
                        <TouchableOpacity style={styles.resendBtn}>
        <Text style={{ color: 'white' }}>{strings.resendpassword}</Text>
                        </TouchableOpacity>
                        <View style={{ ...styles.weekBox, height: height * 0.3 }}>
                        </View>
                        <View style={styles.weekboxContent}>
                            <View style={{ height: 90 }}></View>
                            <View style={styles.formGroup}>
        <Text style={{ color: 'white', paddingBottom: 10 }}>{strings.enterphone}</Text>
                                <View style={styles.phoneInput}>
                                    <Icon name="phone" size={20} style={styles.menu} color="black" />
                                    <TextInput keyboardType='phone-pad' style={styles.phone} />
                                </View>
                                <TouchableOpacity onPress={() => {
                                    alert('Login')
                                    // NavigationService.navigate('Home');
                                    // this.props.drawer.current.close(); 
                                }} style={styles.Btn} activeOpacity={0.7}>
                                    <Text style={{ color: 'white' }}>{strings.login}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <LinearGradient colors={['rgba(0,0,0,0)', '#e207b0']} style={{ position: 'absolute', bottom: 0, width: '100%', height: 200 }} />
            </ImageBackground>
        )
    }
}