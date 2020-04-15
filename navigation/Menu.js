import React from "react";
import { DrawerItems } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar
} from "react-native";
import { Block, theme,Text} from "galio-framework";
import { ImageBackground } from "react-native";
import Images from "../constants/Images";
import { LinearGradient } from 'expo-linear-gradient';
//import firebase from 'react-native-firebase'

const { width } = Dimensions.get("screen");

const Drawer = props => (
  <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" />
    <Block flex={0.7} style={styles.header}>
      <ImageBackground source={Images.Background} style={styles.backgrounImage}>
        <Block style={styles.profileContent}>
          <Image styles={styles.logo} source={Images.Logo} />
          <Text bold size={28} color="white" style={{ marginTop: 10 }}>
          Sizwe Cele
          </Text>
          <Text size={16} color="grey" style={{ marginTop: 10 }}>
          @sizwevcele
          </Text>
        </Block>
        
      </ImageBackground>
    <LinearGradient
          colors={['#514A9D', '#24C6DC']} 
          start={[0.0, 0.5]} 
          end={[1.0, 0.5]} 
          locations={[0.0, 1.0]}
          style={{ width:'100%', height:10, }}/>
    
    </Block>

      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <DrawerItems {...props} style={{fontWeight:'bold',}} />
        </ScrollView>
      </Block>
  </Block>
);

const Menu = {
  contentComponent: props => <Drawer {...props} />,
  drawerBackgroundColor: "white",
  drawerWidth: width * 0.85,
  contentOptions: {
    activeTintColor: "white",
    inactiveTintColor: "#000",
    activeBackgroundColor: "transparent",
    itemStyle: {
      width: width * 0.75,
      backgroundColor: "transparent"
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 12,
      fontWeight: "normal"
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      overflow: "hidden"
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingLeft:0,
    paddingRight:0,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: 0,
    justifyContent: 'center',
    
  },

  backgrounImage: {
    width: '100%', 
    height: '100%',
    paddingStart:0,

  },
  profileContent:{
    paddingTop:90,
    paddingLeft:30,
  },

gradient:{
  width:'100%',
},


});

export default Menu;
