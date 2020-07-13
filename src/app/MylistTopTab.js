


import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput } from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import styles from '../style'
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import App from '../app/App';

import TopTabNavigator from '../screens/MyList/TopTabNavigator';



export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'MyList',
        };
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/images/login3.png')}
                    resizeMode={'stretch'}
                    style={{ height: '100%', flex: 1, }}>

                    <View style={styles.main}>
                        <View style={{ ...styles.srhInputArea, marginTop: 20 }}>
                            <TextInput style={styles.srhInput} placeholderTextColor="rgb(35,66,194)" placeholder="Chillify" />
                            <Icon2 name="search" size={20} style={styles.menu} color="black" />
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'rgba(255,255,0,0.3)', width: '100%', marginTop: 20 }}>
                            <TopTabNavigator />
                        </View>
                    </View>
                </ImageBackground>

            </View>
        );
    }
}
