import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import styles from '../style';
import NavigationService from '../navigators/NavigationService';

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
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/images/login3.png')}
                    resizeMode={'stretch'}
                    style={{ height: '100%', flex: 1 }}>
                    <View style={styles.txtGroup1}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Main') }} style={styles.touchMenu}>
                            <Icon2 name="bars" size={20} style={styles.menu} color="black" />
                        </TouchableOpacity>
                        <View>
        <Text style={styles.headerTxt}>{strings.username}</Text>
                            {/* <Image source={require('../assets/images/song.png')} resizeMode={"stretch"} style={{ width: '100%', flex: 1 }} /> */}
                        </View>
                        <View style={styles.txtBox1}>
                            <Text style={styles.txt}>
                                Type: {strings.weekly}
                            {'\n'}Renewal: 20042019
                            {'\n'}None of tone: 2
                            {'\n'}Playing Mode
                            </Text>
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate('Main');
                                // this.props.drawer.current.close(); 
                            }} style={{ ...styles.Btn, width: '50%', height: 30, marginLeft: 130 }}>
                                <Text style={{ color: 'white' }}>{strings.random}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={{ color: 'white', paddingBottom: 10, fontSize: 20, marginTop:-10 }}>{strings.album}</Text>
                            <View style={{height:270}}>
                                <ScrollView>
                                    <ImageBackground
                                        source={require('../assets/images/opacityBack.png')}
                                        resizeMode={'stretch'} style={styles.songItem}>
                                        <Image source={require('../assets/images/women.png')} resizeMode={"stretch"} style={{ width: 52, height: 52, marginLeft: 15 }} />
                                        <Text style={styles.songTxt}>Samera Saeed{'\n'}{strings.aboutthesong}</Text>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/images/close.png')} resizeMode={"stretch"} style={{ width: 25, height: 25, marginLeft: 70 }} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <ImageBackground
                                        source={require('../assets/images/opacityBack.png')}
                                        resizeMode={'stretch'} style={styles.songItem}>
                                        <Image source={require('../assets/images/women.png')} resizeMode={"stretch"} style={{ width: 52, height: 52, marginLeft: 15 }} />
                                        <Text style={styles.songTxt}>Samera Saeed{'\n'}{strings.aboutthesong}</Text>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/images/close.png')} resizeMode={"stretch"} style={{ width: 25, height: 25, marginLeft: 70 }} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <ImageBackground
                                        source={require('../assets/images/opacityBack.png')}
                                        resizeMode={'stretch'} style={styles.songItem}>
                                        <Image source={require('../assets/images/women.png')} resizeMode={"stretch"} style={{ width: 52, height: 52, marginLeft: 15 }} />
                                        <Text style={styles.songTxt}>Samera Saeed{'\n'}{strings.aboutthesong}</Text>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/images/close.png')} resizeMode={"stretch"} style={{ width: 25, height: 25, marginLeft: 70 }} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <ImageBackground
                                        source={require('../assets/images/opacityBack.png')}
                                        resizeMode={'stretch'} style={styles.songItem}>
                                        <Image source={require('../assets/images/women.png')} resizeMode={"stretch"} style={{ width: 52, height: 52, marginLeft: 15 }} />
                                        <Text style={styles.songTxt}>Samera Saeed{'\n'}{strings.aboutthesong}</Text>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/images/close.png')} resizeMode={"stretch"} style={{ width: 25, height: 25, marginLeft: 70 }} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <ImageBackground
                                        source={require('../assets/images/opacityBack.png')}
                                        resizeMode={'stretch'} style={styles.songItem}>
                                        <Image source={require('../assets/images/women.png')} resizeMode={"stretch"} style={{ width: 52, height: 52, marginLeft: 15 }} />
                                        <Text style={styles.songTxt}>Samera Saeed{'\n'}{strings.aboutthesong}</Text>
                                        <TouchableOpacity>
                                            <Image source={require('../assets/images/close.png')} resizeMode={"stretch"} style={{ width: 25, height: 25, marginLeft: 70 }} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </ScrollView>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}
