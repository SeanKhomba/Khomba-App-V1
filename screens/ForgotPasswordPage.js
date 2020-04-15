import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Image,
  TextInput,
  Alert
} from "react-native";
import { Block, Button as GaButton, Text,theme} from "galio-framework";
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase';
const { width, height } = Dimensions.get("screen");


class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
        };
    }

                                 // This below is the login method that sends login info to firebase \\

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Password reset email has been sent.");
            }, (error) => {
                Alert.alert(error.message);
            });
    }


  render() {

    const { navigation } = this.props;

    return (
            <Block style={styles.ForgotPasswordContainer}>
              <Block flexDirection="row" style={styles.TabBar}>
                    <Block style={styles.buttonOptionLogin} >
                      <Button                               
                      onPress={() => navigation.navigate("Login")}            
                      title="LOGIN"
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
                    <Block style={styles.buttonOptionSignUp} >
                      <Button                            
                      onPress={() => navigation.navigate("SignUp")}            
                      title="SIGN UP"
                      color='#959DAD'
                    />
                    </Block>
              </Block>
                <Block flex center>
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
                        <Text size={20} style={{margin:20,}}>Forgot Password</Text>
                        <Text size={10} style={{margin:20,}}>Type your Email below to reset Password:</Text>
                      </Block>

                      <Block width={width * 0.8} style={{marginBottom:15,flexDirection:'row',  justifyContent:'center'}}>
                        <TextInput
                          style={styles.inputPassword}
                          borderless
                          placeholder="Type Email...."
                          value={this.state.email}
                          keyboardType='email-address'
                          autoCapitalize="none"
                          onChangeText={(text) => { this.setState({email: text}) }}
                          autoCorrect={false}
                          required
                        />
                      </Block>


                      <Block width={width * 0.8} flexDirection="row" style={styles.inputForgotPasswordBotton} >
                        <Block style={styles.buttonOption}>
                            <Button                       
                              onPress={this.onResetPasswordPress}            
                              title="Submit"
                              color="white"
                            />
                        </Block>
                      </Block>

                  </KeyboardAvoidingView>
                </Block>
            </Block>
    );
  }
}

const styles = StyleSheet.create({
  ForgotPasswordContainer: {
    width: width,
    height: height,
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
inputPassword:{
  width:320,
  height:55,
  backgroundColor:"white",
  paddingLeft:20,
  borderRadius:12,

},
inputForgotPasswordBotton:{
  paddingBottom:5,
  flexDirection:'row',
  paddingTop:10,
  borderRadius:12,
  justifyContent:'center'

}, 
buttonOption:{
  width: 320,
  height: 55,
  paddingHorizontal: theme.SIZES.BASE,
  paddingVertical: 6,
  backgroundColor:"#0082B3",
  borderRadius:12,
},

});

export default ForgotPasswordPage;
