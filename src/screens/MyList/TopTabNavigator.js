import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Songs from './Songs';
import Albums from './Albums';
import Favorites from './Favorites';

const TabScreen = createMaterialTopTabNavigator(
    {
        Songs: { screen: Songs },
        Albums: { screen: Albums },
        Favorites: { screen: Favorites },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#999',
            style: {
                backgroundColor: 'rgba(255,255,255,1)',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#00f',
                borderBottomWidth: 2,
            },
        },
    }
);

const App = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            // headerStyle: {
            //     backgroundColor: '#633689',
            // },
            // headerTintColor: '#FFFFFF',
            // title: 'TabExample',
            headerShown: false
        },
    },
});
export default createAppContainer(App);