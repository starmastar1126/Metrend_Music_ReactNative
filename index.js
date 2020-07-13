/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import App from './src/App';
// import App from './src/screens/Home';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
