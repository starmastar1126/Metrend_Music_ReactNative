//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Slider from 'react-native-slider';

// create a component
class Favorites extends Component {

    constructor(props) {
        super(props)
        this.state = {
            musicList: [
                { id: 0, title: '370', description: 'KAVI SINGH 9255834281', time: '4:06' },
                { id: 1, title: 'The Heart Wants Waht I...', description: 'SELENA GOMEZ', time: '3:02' },
                { id: 2, title: 'Rockabye (Clean Bandit...', description: 'CLEAN BANDIT, SEAN PA...', time: '4:11' },
                { id: 3, title: 'Most Girls', description: 'HAILEE STEINFELD', time: '0:26' },
                { id: 4, title: 'Pop', description: 'POP MUSIC', time: '1:23' },
                { id: 5, title: 'Jazz', description: 'JAZZ MUSIC', time: '4:33' },
                { id: 6, title: 'Jazz6', description: 'JAZZ MUSIC', time: '4:33' },
                { id: 7, title: 'Jazz7', description: 'JAZZ MUSIC', time: '4:33' },
                { id: 8, title: 'Jazz8', description: 'JAZZ MUSIC', time: '4:33' },
            ],
            playStatus: null,
            value: 0
        }
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.musicList.map((item, index) => (
                        <View style={styles.MusicUnitContent}>
                            <View key={index} style={styles.MusicUnit}>
                                <View style={styles.PlayPause}>
                                    {/* <TouchableOpacity onPress={() => {this.setState(PrevState => ({playStatus: !PrevState.playStatus}))}}> */}
                                    <TouchableOpacity onPress={() => {
                                        this.setState({ playStatus: this.state.playStatus != index ? item.id : null });
                                    }}>

                                        <Icon name={this.state.playStatus == index ? 'pause' : 'play'} size={20} style={styles.menu} color="#888" />
                                    </TouchableOpacity>
                                    {/* <Iconn name="play" /> */}
                                </View>
                                <View style={styles.MusicContent}>
                                    <View style={{ justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'rgb(89,114,152)' }}>{item.title}</Text>
                                        <Text style={{ color: '#999' }}>{item.description}</Text>
                                    </View>
                                    <Text>{item.time}</Text>
                                </View>
                            </View>
                            {
                                this.state.playStatus == index &&
                                <View style={{ width: '80%', marginLeft: '10%' }}>
                                    <Slider
                                        value={this.state.value}
                                        onValueChange={(value) => this.setState({ value })} />
                                </View>
                            }
                        </View>
                    ))
                }

            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    PlayPause: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#555',
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    MusicUnitContent: {
        width: '100%',
        padding: 0,
        flexDirection: 'column',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    MusicUnit: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
    },
    MusicContent: {
        marginLeft: 10,
        width: '80%',
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

//make this component available to the app
export default Favorites;
