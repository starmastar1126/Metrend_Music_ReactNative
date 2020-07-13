import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import styles from '../style'

export default class search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bottomAlbum: [
                { id: 0, name: 'tomato' },
                { id: 1, name: 'lemon' },
                { id: 2, name: 'apple' },
            ],
            changeItem:'SongName'
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ ...styles.searchArea1, width: '90%'}}>
                    <View style={{ flexDirection: 'row', width: '100%', marginTop:120 }}>
                        <View style={styles.srhInputArea1}>
                            <TextInput style={styles.srhInput1} placeholder="Search..." />
                            <Icon2 name="search" size={20} style={styles.menu} color="black" />
                        </View>
                        <TouchableOpacity style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 20 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%' }}>
                        <Text style={{marginTop:10}}>Search by</Text>
                    </View>
                    <View style={styles.searchBtn}>
                        <TouchableOpacity style={this.state.changeItem == 'SongName'? styles.searchBtnItem: styles.searchBtnItem1} onPress={()=>{this.setState({changeItem:'SongName'})}}>
                            <Text>Song Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.changeItem == 'SongId'? styles.searchBtnItem: styles.searchBtnItem1} onPress={()=>{this.setState({changeItem:'SongId'})}}>
                            <Text>Song Id</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.changeItem == 'ArtistName'? styles.searchBtnItem: styles.searchBtnItem1} onPress={()=>{this.setState({changeItem:'ArtistName'})}}>
                            <Text>Artist Name</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchView}>
                    <View style={{ flexDirection:'row'}}>
                        {
                            this.state.bottomAlbum.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.borderImageGroup}>
                                    <Image style={styles.borderImage} source={require('../assets/images/' + 0 + '.jpg')} />
                                    <Text style={styles.imgName} onPress={() => { alert(index) }}>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View style={{ flexDirection:'row'}}>
                        {
                            this.state.bottomAlbum.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.borderImageGroup}>
                                    <Image style={styles.borderImage} source={require('../assets/images/' + 0 + '.jpg')} />
                                    <Text style={styles.imgName} onPress={() => { alert(index) }}>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View style={{ flexDirection:'row'}}>
                        {
                            this.state.bottomAlbum.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.borderImageGroup}>
                                    <Image style={styles.borderImage} source={require('../assets/images/' + 0 + '.jpg')} />
                                    <Text style={styles.imgName} onPress={() => { alert(index) }}>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </View>
        );
    }
}
