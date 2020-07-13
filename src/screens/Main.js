import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { drawer } from "../navigators/AppNavigation";
import strings from '../strings';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Main extends Component {

    constructor(props) {
        super(props)
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
            <View style={styles.box}>
                <View style={styles.container}>
                    <View style={styles.searchArea}>
                        <TouchableOpacity onPress={() => drawer.current.open()}>
                            <Icon name="bars" size={20} style={styles.menu} color="black" />
                        </TouchableOpacity>
                        <View style={styles.srhInputArea}>
                            <TextInput style={styles.srhInput} placeholder="Search..." />
                            <Icon name="search" size={20} style={styles.menu} color="black" />
                        </View>
                    </View>
                    <Text style={styles.top}>{strings.top20tones}</Text>
                    <View style={styles.albumArea}>
                        <ScrollView horizontal={true} >
                            {
                                this.state.bottomAlbum.map((item, index) => (
                                    <View key={index} style={styles.albumImageGroup}>
                                        <Image style={styles.albumImage} source={require('../assets/images/login' + 1 + '.png')} />
                                        <Text style={styles.imgAlbumName} onPress={() => { alert(index) }}>{item.name}</Text>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <Text style={styles.most}>{strings.mostdown}</Text>
                    <View style={styles.bottomArea}>
                        <ScrollView horizontal={true}>
                            {
                                this.state.bottomAlbum.map((item, index) => (
                                    <View key={index} style={styles.borderImageGroup}>
                                        <Image style={styles.borderImage} source={require('../assets/images/' + 0 + '.jpg')} />
                                        <Text style={styles.imgName} onPress={() => { alert(index) }}>{item.name}</Text>
                                    </View>
                                ))
                            }

                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default Main;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        width: '90%',
        marginLeft: '5%',
        backgroundColor: 'white'
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
    srhInput: {
        width: '80%',
        marginLeft: 18,
        paddingBottom: 8
    },
    menu: {
        marginHorizontal: 10
    },
    top: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: "center",
        marginTop: -12,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    most: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: "center",
        marginTop: -12,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    albumArea: {
        height: 345,
        paddingVertical: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 3
    },
    albumImage: {
        borderRadius: 15,
        width: 260,
        height: 300,
        resizeMode: 'cover',
    },
    albumImageGroup: {
        borderRadius: 15,
        width: 260,
        height: 300,
        elevation: 8,
        backgroundColor: '#000',
        margin: 5
    },

    bottomArea: {
        height: 180,
        paddingVertical: 10,
    },
    borderImage: {
        borderRadius: 15,
        width: 120,
        height: 140,
        resizeMode: 'cover',
    },
    borderImageGroup: {
        borderRadius: 15,
        width: 120,
        height: 140,
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
    imgAlbumName: {
        fontSize: 22,
        width: 120,
        paddingVertical: 5,
        color: 'white',
        backgroundColor: '#0aa',
        marginTop: -50,
        borderRadius: 20,
        alignItems: "center",
        paddingHorizontal: 15
    }
});

