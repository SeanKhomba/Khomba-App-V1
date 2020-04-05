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
import { Block, Button as GaButton, Text} from "galio-framework";
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
const { width, height } = Dimensions.get("screen");


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        fullName="",
        phone="",
        password: "",
    };
}
                                 // This below is the login method that sends login info to firebase \\

onLoginPress = () => {
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });
  firebase.auth().signInWithPhoneNumber(this.state.phone, this.state.phone)
      .then(() => { }, (error) => { Alert.alert(error.message); });
}


  render() {

    const { navigation } = this.props;

    return (
            <Block style={styles.LoginContainer}>
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
                        <Text size={20} style={{margin:20,}}>Login to Khomba</Text>
                      </Block>
    
                      <Block width={width * 0.8} style={{marginBottom:15}}>
                        <TextInput
                          style={styles.inputLogin}
                          borderless
                          placeholder="Full Name"
                          value={this.state.fullName}
                          keyboardType='default'
                          autoCapitalize="none"
                          onChangeText={(text) => { this.setState({fullName: text}) }}
                          required
                        />
                      </Block>
                      
                      <Block width={width * 0.8} style={{marginBottom:15}}>
                        <TextInput
                          style={styles.inputLogin}
                          borderless
                          placeholder="Phone"
                          value={this.state.phone}
                          keyboardType="number-pad"
                          onChangeText={(text) => { this.setState({phone: text}) }}
                          required
                        />
                      </Block>

                      <Block width={width * 0.8} style={{marginBottom:15}}>
                        <TextInput
                          style={styles.inputLogin}
                          borderless
                          placeholder="Password"
                          value={this.state.password}
                          secureTextEntry={true}
                          autoCapitalize="none"
                          autoCorrect={false}
                          onChangeText={(text) => { this.setState({password: text}) }}
                          required
                        />
                      </Block>


                      <Block width={width * 0.8} flexDirection="row" style={styles.inputLoginBotton} >
                          <Button                       
                            onPress={this.onLoginPress}            
                            title="Login"
                            color="white"
                          />
                      </Block>

                      <Block width={width * 0.9} flexDirection="row"  style={styles.LoginAccount} >
                        <Text color='#959DAD' onPress={() => navigation.navigate("ForgotPasswordPage")}>
                          Forgot Password?
                        </Text>
                      </Block>

                  </KeyboardAvoidingView>
                </Block>
            </Block>
    );
  }
}

const styles = StyleSheet.create({
  LoginContainer: {
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
inputLogin:{
  width:320,
  height:55,
  backgroundColor:"white",
  paddingLeft:20,
  borderRadius:12,

},
inputLoginBotton:{
  width:320,
  height:55,
  backgroundColor:"#0082B3",
  paddingTop:10,
  borderRadius:12,
  justifyContent:'center'

}, 
LoginAccount:{
  width:320,
  height:55,
  paddingTop:20,
  justifyContent:'center',
  fontSize:12,
  color:'#959DAD'


}, 
});

export default SignUp;
