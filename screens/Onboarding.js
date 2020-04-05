import React from "react";
import {
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import argonTheme from "../constants/Theme";
import Video from 'react-native-video';
const { height, width } = Dimensions.get("screen");

class Onboarding extends React.Component {
 
  render() {
    const { navigation } = this.props;

    return (
    <Block flex style={styles.container}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white"/>

          <Block   style={ styles.skipIcon}>
          <Button style={styles.skipButton} onPress={() => navigation.navigate("LetsTalk")}>
            <Text style={{fontSize:15,}}>Skip -></Text>
          </Button>
          </Block>
     
      <Block flex  style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block style={styles.title}>

              <Block center style={{marginTop:20,}}>
                <Text center color="black" size={30}>
                Welcome to khomba
                </Text>
              </Block>
              <Block center style={{resizeMode:'cover'}}>
                  <Image 
                    style={{width: 320, height: 220}}
                    source={require('../images/asset.png')}
                  />
                  {/* <Video 
                  source={require('../videos/English.mp4')}   
                  ref={(ref) => {
                    this.player = ref
                  }}                                      
                  onBuffer={this.onBuffer}                
                  onError={this.videoError}               
                  style={styles.backgroundVideo} /> */}
                </Block>
                <Block center style={{marginTop:80}}>
                  {/* <Text center color="black" size={15}>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                  </Text> */}
                </Block>
              </Block>

              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("MapPage")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Get Started
                </Button>
              </Block>

            </Block>
       </Block>
    </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 1,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {

    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 300,
    height: 230,
    zIndex: 2,
    
    position: 'relative',
    
  },
  title: {
    marginTop:'-5%',
    justifyContent: 'center',
  },
  subTitle: {
    marginTop: 20
    
  },
  skipIcon:{
    flexDirection: 'row-reverse',
    marginTop:60,
    marginLeft:30,
  },
  skipButton:{
    width: 80, 
    height: 80,
    fontSize:50,
    shadowOpacity:null,
    color:'black',
    backgroundColor:'transparent',
    
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});

export default Onboarding;
