import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  TouchableHighlight,
} from "react-native";
import { Block, Button as GaButton, theme, Text} from "galio-framework";
import ImageOverlay from "react-native-image-overlay";
const { width, height } = Dimensions.get("window");

class LetsTalk extends React.Component {
  render() {

    const { navigation } = this.props;

    return (
      <ImageOverlay 
      style={styles.ImageOverlay}
      source={require('../images/bg-map.png')} 
      overlayColor={"white"}
      overlayAlpha={0.2} 
      height='100%'

      
      >

    
            <Block style={styles.LetsTalkContainer}>

                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                      <Block  middle style={{marginTop:50}}>
                          <Image 
                          style={{width: 80, height: 80}}
                          source={require('../images/ic.png')}
                          />
                      </Block>
                      <Block width={width * 0.8} middle>
                        <Text size={20} style={{color:"black",marginBottom:10,paddingLeft:35}}>" Lets Talk "</Text>
                      </Block>
                      
                      <Block width={width * 0.9} middle>
                        <Text size={12} style={{color:"black",margin:20,}}>" Have feedback or a want to report your experience? "</Text>
                        <Text size={12} style={{color:"black",margin:20,}}>" Feel free select your area of experiece below. "</Text>
                      </Block>
                           <Block style={styles.ButtonContainer}>
                                    
                                    <Block style={styles.IdividualButtonContainer}>
                                        <TouchableHighlight onPress={() => navigation.navigate("Taxi")}>
                                            <Image  source={require('../images/lets-talk.png')} style={styles.ImageContainer}/>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => navigation.navigate("Taxi")}>
                                          <Text style={{paddingTop:10, color:'black'}}>Taxi</Text>  
                                        </TouchableHighlight>
                                    </Block>

                                    <Block style={styles.IdividualButtonContainer}>
                                        <TouchableHighlight onPress={() => navigation.navigate("TaxiRank")}>
                                            <Image  source={require('../images/hire-taxi.png')} style={styles.ImageContainer}/>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => navigation.navigate("TaxiRank")}>
                                           <Text style={{paddingTop:10, color:'black'}}>Taxi Rank</Text> 
                                        </TouchableHighlight>
                                    </Block>

                                    <Block style={styles.IdividualButtonContainer}>
                                        <TouchableHighlight onPress={() => navigation.navigate("TaxiDriver")}>
                                            <Image  source={require('../images/updates.png')} style={styles.ImageContainer}/>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => navigation.navigate("TaxiDriver")}>
                                            <Text style={{paddingTop:10, color:'black'}}>Driver</Text>
                                        </TouchableHighlight>
                                    </Block>

                          </Block>
                      </KeyboardAvoidingView>
                </Block>
            </Block>
        </ImageOverlay>
    );
  }
}

const styles = StyleSheet.create({


  ImageOverlay:{
    width:width,
    height:height,
  },

  LetsTalkContainer: {
    width: width * 0.8,
    height: height * 0.7,

  },

  IdividualButtonContainer:{
    flex:2,
    justifyContent:'center', 
    alignItems:'center',
},

ButtonContainer:{
  paddingTop:5,
  paddingBottom:5,
  flexDirection:'row',
},
  InputContainer:{
    width: width * 0.8,
    height: height * 0.2,
    height:60,
    width:'100%',

  },

  inputLetsTalk:{
    width:280,
    height:45,
    backgroundColor:"#353A50",
    color:'white',
    paddingLeft:20,
    borderRadius:12,
  
  },


ImageContainer:{
    width:50, 
    height:50,
    paddingLeft:20, 
    borderRadius:25,

},
  
});

export default LetsTalk;
