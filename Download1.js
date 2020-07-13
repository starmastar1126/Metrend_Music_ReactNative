import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bottomAlbum: [
                { id: 0, name: 'tomato' },
                { id: 1, name: 'lemon' },
                { id: 2, name: 'apple' },
                { id: 3, name: 'pear' },
                { id: 4, name: 'banana' },
                { id: 5, name: 'berry' },
            ]
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 5 }}>
                    <ImageBackground
                        source={require('../assets/images/login3.png')}
                        resizeMode={'stretch'}
                        style={{ height: '100%' }}
                    >
                        <LinearGradient colors={['rgba(0,0,0,0)', '#e207b0']} style={{ position: 'absolute', bottom: 0, width: '100%', height: 100 }} />
                        <View style={{ flexDirection: 'row', alignItems: "center", marginLeft:'5%' }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Main') }} style={styles.touchMenu}>
                                <Icon2 name="bars" size={20} style={styles.menu} color="black" />
                            </TouchableOpacity>
                            <View style={styles.headerView}>
                                <Text style={styles.headerTxt1}>Your Credit 15000 IQD</Text>
                            </View>
                        </View>
                        <View style={styles.downMedium}>
                            <View>
                                <Text style={{ fontSize: 40, color: '#fff' }}>Hatem</Text>
                                <Text style={{ fontSize: 14, color: '#fff', marginTop: -10 }}>about the song</Text>
                                <Text style={styles.IqdTxt}>500 IQD</Text>
                            </View>
                            <TouchableOpacity style={styles.largePlay}>
                                <Icon2 name="play" size={20} style={styles.menu} color="white" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.giftBtn1}>
                            <Text style={{ fontSize: 20, color: '#f00', letterSpacing: 3 }} >Download</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.bottomArea}>
                    <Text style={{ fontSize: 20, letterSpacing: 1, fontWeight: '700', color: '#000', marginBottom: 10 }}>Most Down</Text>
                    <ScrollView horizontal={true}>
                        {
                            this.state.bottomAlbum.map((item, index) => (
                                <View key={index} style={styles.borderImageGroup1}>
                                    <Image style={styles.borderImage1} source={require('../assets/images/' + 0 + '.jpg')} />
                                    <Text style={styles.imgName} onPress={() => { alert(index) }}>{item.name}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}
