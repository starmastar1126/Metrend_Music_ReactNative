// import React, { Component, createRef } from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
// import ScalingDrawer from 'react-native-scaling-drawer';
// import { createAppContainer } from 'react-navigation';

// import NavigationService from './NavigationService';

// import Login from '../screens/Login'
// import Main from '../screens/Main';
// import LeftMenu from './LeftMenu';
// import Home from '../screens/Home';
// import Schedule from '../screens/Schedule';
// import Profile from '../screens/Profile';
// import MyList from '../screens/MyList';

// const AppStack = createStackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       headerShown: false
//     }
//   },
//   Main: {
//     screen: Main,
//     navigationOptions: {
//       headerShown: false
//     }
//   },
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       headerShown: false
//     }
//   },
//   Schedule: {
//     screen: Schedule,
//     navigationOptions: {
//       headerShown: false
//     }
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       headerShown: false
//     }
//   },
//   MyList: {
//     screen: MyList,
//     navigationOptions: {
//       headerShown: false
//     }
//   }
// });

// const AppContainer = createAppContainer(AppStack);

// export const drawer = createRef();

// const defaultScalingDrawerConfig = {
//   scalingFactor: 0.7,
//   minimizeFactor: 0.6,
//   swipeOffset: 20
// };

// export default class AppNavigation extends Component {
//   render() {
//     return (
//       <ScalingDrawer
//         ref={drawer}
//         content={<LeftMenu drawer={drawer} />}
//         {...defaultScalingDrawerConfig}
//         onClose={() => console.log('close')}
//         onOpen={() => console.log('open')}
//       >
//         <AppContainer
//           ref={navigatorRef => {
//             NavigationService.setTopLevelNavigator(navigatorRef);
//           }}
//         />
//       </ScalingDrawer>
//     );
//   }
// }







import React, { Component, createRef } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import ScalingDrawer from 'react-native-scaling-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import NavigationService from './NavigationService';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import strings from '../strings';

import Login from '../screens/Login'
import Login2 from '../screens/Login2'
import Signup from '../screens/Signup'
import Signup2 from '../screens/Signup2'
import Main from '../screens/Main';
import LeftMenu from './LeftMenu';
import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Profile from '../screens/Profile';
import MyList from '../screens/MyList';
import Search from '../screens/Search';
import Download1 from '../screens/Download1';
import Download2 from '../screens/Download2';
import Download3 from '../screens/Download3';
import LanguageSwitcher from '../screens/LanguageSwitcher';

const home = strings.home;
const profile = strings.profile;
const mylist = strings.mylist;
const schedule = strings.schedule;

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  Login2: {
    screen: Login2,
    navigationOptions: {
      headerShown: false
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false
    }
  },
  Signup2: {
    screen: Signup2,
    navigationOptions: {
      headerShown: false
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerShown: false
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false
    }
  },
  Download1: {
    screen: Download1,
    navigationOptions: {
      headerShown: false
    }
  },
  Download2: {
    screen: Download2,
    navigationOptions: {
      headerShown: false
    }
  },
  Download3: {
    screen: Download3,
    navigationOptions: {
      headerShown: false
    }
  },
  LanguageSwitcher: {
    // screen: () => <LanguageSwitcher/>,
    screen: LanguageSwitcher,
    navigationOptions: {
      headerShown: false
    }
  },
});

const TabNavigation = createMaterialBottomTabNavigator(
  {
      Home: {
          screen: Home,
          navigationOptions: {
              tabBarLabel: home,
              tabBarIcon: ({ tintColor }) => (
                  <View>
                      <Icon name='ios-home' style={{ color: tintColor }} size={25} />
                  </View>
              )
          }
      },
      Schedule: {
          screen: Schedule,
          navigationOptions: {
              tabBarLabel: schedule,
              tabBarIcon: ({ tintColor }) => (
                  <View>
                      <Icon name={'ios-musical-notes'} style={{ color: tintColor }} size={25} />
                  </View>
              ),
              initialRouteName: 'Home',
              activeColor: '#ffffff',
              inactiveColor: '#92c5c2',
              barStyle: { backgroundColor: '#2c6d6a', }
          }
      },
      MyList: {
          screen: MyList,
          navigationOptions: {
              tabBarLabel: mylist,
              tabBarIcon: ({ tintColor }) => (
                  <View>
                      <Icon name={'ios-heart'} style={{ color: tintColor }} size={25} />
                  </View>
              ),
              initialRouteName: 'Home',
              activeColor: '#ffffff',
              inactiveColor: '#a3c2fa',
              barStyle: { backgroundColor: '#2163f6', }
          }
      },
      Profile: {
          screen: Profile,
          navigationOptions: {
              tabBarLabel: profile,
              tabBarIcon: ({ tintColor }) => (
                  <View>
                      <Icon name={'ios-cart'} style={{ color: tintColor }} size={25} />
                  </View>
              ),
              initialRouteName: 'Home',
              activeColor: '#ffffff',
              inactiveColor: '#ebaabd',
              barStyle: { backgroundColor: '#d13560', }
          }
      },
  },
  {
      initialRouteName: 'Home',
      activeColor: '#ffffff',
      inactiveColor: '#bda1f7',
      barStyle: { backgroundColor: '#6948f4', }
  }
)

// const AuthContainer = createAppContainer(AuthStack);
// const AppContainer = createAppContainer(TabNavigation);

const Container = createSwitchNavigator(
  {
    Auth: AuthStack,
    Appoo: TabNavigation,
  },
  {
    initialRouteName: 'Auth',
  }
)

const AppContainer = createAppContainer(Container);

export const drawer = createRef();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.7,
  minimizeFactor: 0.6,
  swipeOffset: 20
};

export default class AppNavigation extends Component {
  render() {
    return (
      <ScalingDrawer
        ref={drawer}
        content={<LeftMenu drawer={drawer} />}
        {...defaultScalingDrawerConfig}
        onClose={() => console.log('close')}
        onOpen={() => console.log('open')}
      >
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </ScalingDrawer>
    );
  }
}
