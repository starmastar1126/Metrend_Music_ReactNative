//import liraries
import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style';
import NavigationService from '../navigators/NavigationService';
import strings from '../strings';


const url1 = require('../assets/images/sideMenu1.png');
const url2 = require('../assets/images/sideMenu2.png');

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
                <View style={styles.txtGroup}>
                    <View style={styles.txtBox}>
                        <Text style={styles.txt}>
                            {strings.youarenotRBT} 
                            {'\n'}{strings.pleaseenteryourmobileservice}
                        </Text>
                    </View>
                    <View style={styles.formGroup}>
        <Text style={{ color: 'white', paddingBottom: 10 }}>{strings.enterphone}</Text>
                        <View style={styles.phoneInput}>
                            <Icon name="phone" size={20} style={styles.menu} color="black" />
                            <TextInput keyboardType='phone-pad' style={styles.phone} />
                        </View>
                        <TouchableOpacity onPress={() => {
                            NavigationService.navigate('Signup2');
                            // this.props.drawer.current.close(); 
                        }} style={styles.Btn} activeOpacity={0.7}>
                            <Text style={{ color: 'white' }}>{strings.gotohomepage}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <LinearGradient colors={['rgba(0,0,0,0)', '#e207b0']} style={{ position: 'absolute', bottom: 0, width: '100%', height: 200 }} />
            </ImageBackground>
        )
    }
}