
// //import liraries
// import React, { Component } from 'react';
// import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
// import styles from '../style';
// import NavigationService from './NavigationService';

// const url1 = require('../assets/images/sideMenu1.png');
// const url2 = require('../assets/images/sideMenu2.png');

// export default class MusicApp extends Component {

//     constructor() {
//         super()
//         this.state = {
//             subscribe: true,
//             expand: false,
//             imgURL: url1,
//         }
//     }

//     render() {
//         return (
//             <ImageBackground
//                 source={this.state.imgURL}
//                 resizeMode={'stretch'}
//                 style={{ height: '100%', flex: 1 }}>
//                 <View style={styles.listGroup}>
//                     {
//                         this.state.subscribe &&
//                         <TouchableOpacity
//                             onPress={() => {
//                                 this.setState({
//                                     subscribe: false,
//                                     expand: true,
//                                     imgURL: url2,
//                                 })
//                             }}>
//                             <Text style={styles.textList}>subscribe</Text>
//                         </TouchableOpacity>
//                     }
//                     <TouchableOpacity onPress={() => {
//                         NavigationService.navigate('Home');
//                         this.props.drawer.current.close();
//                     }}>
//                         <Text style={styles.textList}>Home</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                         <Text style={styles.textList}>Language</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                         <Text style={styles.textList}>Category</Text>
//                     </TouchableOpacity>
//                     {
//                         this.state.expand &&
//                         <View>
//                             <TouchableOpacity onPress={() => {
//                                 NavigationService.navigate('Profile');
//                                 this.props.drawer.current.close();
//                             }}>
//                                 <Text style={styles.textList}>Profile</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity>
//                                 <Text style={styles.textList}>Caller List</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity>
//                                 <Text style={styles.textList}>Schedule</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => {
//                                 this.setState({
//                                     subscribe: true,
//                                     expand: false,
//                                     imgURL: url1
//                                 })
//                             }}>
//                                 <Text style={styles.textList}>Unsubscribe</Text>
//                             </TouchableOpacity>
//                         </View>
//                     }
//                 </View>
//             </ImageBackground>
//         )
//     }
// }











//import liraries
import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../style';
import NavigationService from './NavigationService';
import strings from '../strings';

const url1 = require('../assets/images/back1.jpg');
const url2 = require('../assets/images/back3.jpg');

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
                source={this.state.imgURL}
                resizeMode={'stretch'}
                style={{ height: '100%', flex: 1 }}>
                <View style={styles.listGroup}>
                    {
                        this.state.subscribe &&
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    subscribe: false,
                                    expand: true,
                                    imgURL: url2,
                                })
                            }}>
                            <Text style={styles.textList}>{strings.subscribe}</Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={() => {
                        NavigationService.navigate('Home');
                        this.props.drawer.current.close();
                    }}>
                        <Text style={styles.textList}>{strings.home}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        NavigationService.navigate('LanguageSwitcher');
                        this.props.drawer.current.close();
                    }}>
                        <Text style={styles.textList}>{strings.language}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textList}>{strings.category}</Text>
                    </TouchableOpacity>
                    {
                        this.state.expand &&
                        <View>
                            <TouchableOpacity onPress={() => {
                                NavigationService.navigate('Profile');
                                this.props.drawer.current.close();
                            }}>
                                <Text style={styles.textList}>{strings.profile}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textList}>{strings.callerlist}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textList}>{strings.schedule}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    subscribe: true,
                                    expand: false,
                                    imgURL: url1
                                })
                            }}>
                                <Text style={styles.textList}>{strings.unsubscribe}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </ImageBackground>
        )
    }
}