import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Image,
  TextInput,
} from "react-native";
import { Block, Button as GaButton,Text} from "galio-framework";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

class SignUp extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
            <Block style={styles.OTPContainer}>
                <Block flexDirection="row" style={styles.TabBar}>
                  <Block style={styles.buttonOptionLogin} >
                    <Button                               
                    onPress={() => navigation.navigate("Login")}            
                    title="LOGIN"
                    color='#959DAD'
                  />
                  </Block>
                  <Block style={styles.buttonOptionSignUp} >
                    <Button                            
                    onPress={() => navigation.navigate("SignUp")}            
                    title="SIGN UP"
                    color='#959DAD'
                  />
                  <LinearGradient
                  colors={['#514A9D', '#24C6DC']} 
                  start={[0.0, 0.5]} 
                  end={[1.0, 0.5]} 
                  locations={[0.0, 1.0]}
                  style={{ width:'100%', height:5,marginTop:5, }}
                  />
                  </Block>
                </Block>
                
                <Block flex center>                   
                  <ScrollView
                    vertical={true} 
                      >
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >

                        <Block  middle style={{marginTop:50}}>
                            <Image 
                            style={{width: 120, height: 120}}
                            source={require('../images/ic.png')}
                            />
                        </Block>
                        
                        <Block width={width * 0.8} middle>
                          <Text size={20} style={{margin:20,}}>Please enter your OTP</Text>
                        </Block>

                        <Block width={width * 0.8} style={{marginBottom:15}}>
                          <TextInput
                            style={styles.inputOTPNumber}
                            borderless
                            placeholder="OTP Number"
                            autoCompleteType='tel'
                            keyboardType="number-pad"
                          />
                        </Block>

                        <Block width={width * 0.8} flexDirection="row"  style={styles.inputOTPButton} >
                        <Button                       
                          onPress={() => navigation.navigate("Onboarding")}            
                          title="Submit"
                          color="white"
                        />
                        </Block>

                        <Block width={width * 0.9} flexDirection="row"  style={styles.OTPAccount} >
                          <Text color='#959DAD' onPress={this._onPressButton}   >
                            Forgot Password?
                          </Text>
                        </Block>
                        
                    </KeyboardAvoidingView>
                  </ScrollView>
                </Block>
            </Block>
    );
  }
}

const styles = StyleSheet.create({
  OTPContainer: {
    width: width,
    height: height * 0.9,
    backgroundColor: "#F4F5F7",
  },

  TabBar:{
    backgroundColor:'white',
    height:100,
    width:'100%',

  },

  buttonOptionLogin:{
    width:'50%',
    height: 50,
    borderTopColor:'#E0E0E0',
    borderRightColor:'#E0E0E0',
    borderRightWidth:0.28,
    borderTopWidth:0.28,
    paddingVertical: 8,
    backgroundColor:"white",
    marginTop: 50 
},
buttonOptionSignUp:{
  width:'50%',
  height: 50,
  borderTopColor:'#E0E0E0',
  borderRightColor:'#E0E0E0',
  borderRightWidth:0.28,
  borderTopWidth:0.28,
  paddingVertical: 8,
  backgroundColor:"white",
  marginTop: 50 
},
inputOTPNumber:{
  width:320,
  height:55,
  backgroundColor:"white",
  paddingLeft:20,
  borderRadius:12,

},
inputOTPButton:{
  width:320,
  height:55,
  backgroundColor:"#0082B3",
  paddingTop:10,
  borderRadius:12,
  justifyContent:'center'

}, 
OTPAccount:{
  width:320,
  height:55,
  paddingTop:20,
  justifyContent:'center',
  fontSize:12,
  color:'#959DAD'


}, 
});

export default SignUp;
