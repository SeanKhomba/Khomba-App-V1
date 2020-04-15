import React from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Button,
  Image,
  TextInput,
  Alert,
  Platform
} from "react-native";
import { Block, Button as GaButton,Text,theme} from "galio-framework";
import { LinearGradient } from 'expo-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import * as firebase from 'firebase';
const { width, height } = Dimensions.get("window");

class SignUp extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = { 
        // fullName: "",
        email: "",
        // phone: "",
        password: "",
        passwordConfirm:"",
    };
} 

onSignUpPress = () => {
  if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
  }

  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {this.props.navigation.navigate('Onboarding') }, (error) => { Alert.alert(error.message); });

}

  render() {
    const { navigation } = this.props;
    return (

      <KeyboardAwareScrollView
      style={{ flex: 1 }}
      behavior={Platform.Os == "ios" ? "padding" : "height"}
      enabled
    >
        <Block style={styles.signUpContainer}>
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
              
            <Block flex center style={styles.SignUpContent}>                   
                      <Block  middle style={{marginTop:50}}>
                          <Image 
                          style={{width: 120, height: 120}}
                          source={require('../images/ic.png')}
                          />
                      </Block>

                      <Block width={width * 0.8} middle>
                        <Text size={20} style={{margin:20,}}>Sign Up to Khomba</Text>
                      </Block>
    
                      <Block width={width * 0.8} style={{marginBottom:15,flexDirection:'row',  justifyContent:'center'}}>
                        <TextInput
                          style={styles.inputSignUp}
                          borderless
                          placeholder="Full Name"
                          value={this.state.fullName}
                          keyboardType='default'
                          autoCapitalize="none"
                          onChangeText={(text) => { this.setState({fullName: text}) }}
                        />
                      </Block>

                      <Block width={width * 0.8} style={{marginBottom:15,flexDirection:'row',  justifyContent:'center'}}>
                        <TextInput
                          style={styles.inputSignUp}
                          borderless
                          placeholder="Email"
                          value={this.state.email}
                          keyboardType='email-address'
                          autoCapitalize="none"
                          onChangeText={(text) => { this.setState({email: text}) }}
                          autoCorrect={false}
                          required
                        />
                      </Block>

                      {/* <Block width={width * 0.8} style={{marginBottom:15,flexDirection:'row',  justifyContent:'center'}}>
                        <TextInput
                          style={styles.inputSignUp}
                          borderless
                          placeholder="Phone"
                          value={this.state.phone}
                          keyboardType="number-pad"
                          onChangeText={(text) => { this.setState({phone: text}) }}
                          required
                        />
                      </Block> */}

                      <Block width={width * 0.8} style={{marginBottom:15,flexDirection:'row',  justifyContent:'center'}}>
                        <TextInput
                          style={styles.inputSignUp}
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
                      <Block width={width * 0.8} style={{marginBottom:15,flexDirection:'row',  justifyContent:'center'}}>
                        <TextInput
                          style={styles.inputSignUp}
                          borderless
                          placeholder="Confirm Password"
                          value={this.state.passwordConfirm}
                          secureTextEntry={true}
                          autoCapitalize="none"
                          autoCorrect={false}
                          onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
                          required
                        />
                      </Block>

                      <Block width={width * 0.8} flexDirection="row"  style={styles.inputSignUpBotton} >
                        <Block style={styles.buttonOption}>
                          <Button                       
                            onPress={this.onSignUpPress}
                            title="Sign Up"
                            color="white"
                          />
                        </Block>
                      </Block>

                      <Block width={width * 0.9} flexDirection="row"  style={styles.signInAccount} >
                        <Text color='#959DAD' onPress={() => navigation.navigate("Login")}   >
                          Already have an account?
                        </Text>
                      </Block>
            </Block>
        </Block>
      </KeyboardAwareScrollView>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  signUpContainer: {
    width: width,
    height: height,
    backgroundColor: "#F4F5F7",
  },

  TabBar:{
    backgroundColor:'white',
    height:100,
    width:width,

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

SignUpContent:{
  width:width,
},

inputSignUp:{
  width:320,
  height:55,
  backgroundColor:"white",
  paddingLeft:20,
  borderRadius:12,

},
inputSignUpBotton:{
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

signInAccount:{
  width:320,
  height:55,
  paddingTop:20,
  justifyContent:'center',
  fontSize:12,
  color:'#959DAD'


}, 
});

export default SignUp;
