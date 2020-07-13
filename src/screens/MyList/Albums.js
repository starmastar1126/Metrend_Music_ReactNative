//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import strings from '../../strings';

// create a component
class Albums extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{strings.albums}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Albums;
