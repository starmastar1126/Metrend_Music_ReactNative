import React, { Component } from 'react';
import { View, Text } from 'react-native';
import App from '../app/App'
import styles from '../style'

export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'MyList',
        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <App/>
            </View>
        );
    }
}
