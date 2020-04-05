import React from "react";
import { Easing, Animated} from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import * as firebase from 'firebase';



// screens
import Onboarding from "../screens/Onboarding";
import ProductPage from "../screens/ProductPage";
import LetsTalk from "../screens/LetsTalk";
import SignUp from "../screens/SignUp";
import ForgotPasswordPage from "../screens/ForgotPasswordPage";
import Login from "../screens/Login";
import OTP from "../screens/OTP";
import Taxi from "../screens/Taxi";
import TaxiRank from "../screens/TaxiRank";
import TaxiDriver from "../screens/TaxiDriver";


// drawer
import Menu from "./Menu";
import DrawerItem from "../Components/DrawerItem";

// header for screens
import Header from "../Components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});  



  // Occurs when signout is pressed...
  LogOutPress = () => {
    firebase.auth().signOut();
  }

// const SignUpStack = createStackNavigator(
//   {
//     SignUp: {
//       screen: SignUp,
//       navigationOptions: ({ navigation }) => ({
//         header: (
//           <Header white transparent title="Sign Up"  navigation={navigation} />
//         ),
//         headerTransparent: true
//       })
//     }
//   },
//   {
//     cardStyle: { backgroundColor: "#FFFFFF" },
//     transitionConfig
//   }
// );
// const LoginStack = createStackNavigator(
//   {
//     Login: {
//       screen: Login,
//       navigationOptions: ({ navigation }) => ({
//         header: (
//           <Header transparent title="Login"  navigation={navigation} />
//         ),
//         headerTransparent: true
//       })
//     }
//   },
//   {
//     cardStyle: { backgroundColor: "#FFFFFF" },
//     transitionConfig
//   }
// );

const ProductPageStack = createStackNavigator({
  ProductPage: {
    screen: ProductPage,
    navigationOptions: ({ navigation }) => ({
      header: (<Header  transparent iconSize={100} iconColor={'black'} navigation={navigation} />)
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});


const LetsTalkStack = createStackNavigator({
  LetsTalk: {
    screen: LetsTalk,
    navigationOptions: ({ navigation }) => ({
      header: <Header transparent title="LetsTalk" navigation={navigation} />,
      headerTransparent: true
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});


                                          // The Menu for the DrawerItems 

const AppStack = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: navOpt => ({
        drawerLabel: () => {}
      })
    },
    ForgotPasswordPage: {
      screen: ForgotPasswordPage,
      navigationOptions: navOpt => ({
        drawerLabel: () => {}
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: navOpt => ({
        drawerLabel: () => {}
      })
    },
    OTP: {
      screen: OTP,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: ({focused}) => {
          <DrawerItem focused={focused} title="Skip" />
        }
      }
    },
    

    LetsTalk: {
      screen: LetsTalkStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="LetsTalk" title="Lets Talk" />
        )
      })
    },


    ProductPage: {
      screen: ProductPageStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="ProductPage" title="Product Page" />
        )
      })
    },


    Taxi: { 
      screen: Taxi,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },

    TaxiRank: { 
      screen: TaxiRank,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },

    TaxiDriver: { 
      screen: TaxiDriver,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },

    LogOut: {
      screen: Login,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} onPress={this.LogOutPress} screen={"Login"} title="Log Out" />
        )
      })
    },

    // AboutUs: {
    //   screen: AboutUsStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} title="About Us" />
    //     ) 
    //   })
    // },
    // ContactUs: {
    //   screen: ContactUsStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} title="Contact Us" />
    //     ) 
    //   })
    // },
    // Register: {
    //   screen: RegisterStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Register" title="Account" />
    //     )
    //   })
    // },
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
