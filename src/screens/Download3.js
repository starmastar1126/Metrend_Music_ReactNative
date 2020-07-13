import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
import strings from '../strings';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Profile',
        };
    }

    render() {
        return (
            <View style={{ height: '100%' }}>
                <ImageBackground
                    source={require('../assets/images/login3.png')}
                    resizeMode={'stretch'}
                    style={{ height: '100%' }}>
                    <LinearGradient colors={['rgba(0,0,0,0)', '#e207b0']} style={{ position: 'absolute', bottom: 0, width: '100%', height: 200 }} />
                    <View style={styles.txtGroup1}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Main') }} style={styles.touchMenu}>
                                <Icon2 name="bars" size={20} style={styles.menu} color="black" />
                            </TouchableOpacity>
                            <View style={styles.headerView}>
                                <Text style={styles.headerTxt1}>{strings.yourcredit}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: '55%', width: '100%', justifyContent: 'space-between' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 40, color: '#fff' }}>Hatem</Text>
                                <Text style={{ fontSize: 14, color: '#fff', marginTop: -10 }}>{strings.aboutthesong}</Text>
                                <Text style={styles.IqdTxt}>500 IQD</Text>
                            </View>
                            <TouchableOpacity style={styles.largePlay} onPress={() => { this.props.navigation.goBack() }} >
                                <Icon2 name="play" size={20} style={styles.menu} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.downBottom}>
                            <View style={{ width: '90%', marginLeft: '5%', marginTop: 10 }}>
                                <Text style={{ color: '#fff' }}>{strings.entername}</Text>
                                <TextInput style={styles.inputTxt}></TextInput>
                            </View>
                            <View style={{ width: '90%', marginLeft: '5%', marginTop: 10 }}>
                                <Text style={{ color: '#fff' }}>{strings.enterphone}</Text>
                                <TextInput style={styles.inputTxt}></TextInput>
                            </View>
                            <TouchableOpacity style={styles.giftBtn}>
                                <Text style={{ fontSize: 20, color: '#f00', letterSpacing: 3 }} >{strings.gift}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}
