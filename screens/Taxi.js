import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Image,
  TextInput,
  Alert,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { CheckBox } from 'react-native-elements'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Block, Button as GaButton, Text} from "galio-framework";
import ImageOverlay from "react-native-image-overlay";
// import {onTaxiInfoAdded} from '../Services/LetsTalkApi';
import * as firebase from 'firebase';
import 'firebase/firestore';
const { width, height } = Dimensions.get("window");


// The Cridentials for  " Fiebase API " \\ 

const config = {
  apiKey: "AIzaSyAsRnlXOPUAE_HnxRR3KdHJvx_cDeJC338",
  authDomain: "khomba-4c69f.firebaseapp.com",
  databaseURL: "https://khomba-4c69f.firebaseio.com",
  projectId: "khomba-4c69f",
  storageBucket: "khomba-4c69f.appspot.com",
  messagingSenderId: "335809381952",
  appId: "1:335809381952:web:ff1c0485b54346484941a5"
};
firebase.initializeApp(config);

// varabiles for the firebase method " onTaxiInfoAdded " \\ 

const database = firebase.database();
const rootRef = database.ref('Taxi');

class Taxi extends React.Component {

  constructor() {
    super();
    this.state ={
      Route:"",
      NumberPlate:"",
      OverCharge:false,
      BadDriving:false,
      LostItem:false,
      TaxiCondition:false,
      Compliments:false,
      Other:false,
      MoreDetails:"",
    }
    this.onTaxiInfoAdded = this.onTaxiInfoAdded.bind(this);
  }

  
            // This below is the method that inserts input data ro the Real Time Database in Firebase \\ 


  // A Method clearing the feilds after submitted form below  \\  

resetTaxiFields() {

  this.setState({Route: ''}),
  this.setState({NumberPlate: ''}),
  this.setState({OverCharge: false }),
  this.setState({BadDriving: false }),
  this.setState({LostItem: false }),
  this.setState({TaxiCondition: false }),
  this.setState({Compliments: false }),
  this.setState({Other: false }),
  this.setState({MoreDetails: ''})
}

alertMessageOnnSubmit() {
  const { navigation } = this.props;
  Alert.alert(
    'Submitted',
    'Thank you for you Feedback!',
    [
      {text: 'Thank You!', onPress: () => navigation.navigate("LetsTalk")},
      
    ],
  );
}

  onTaxiInfoAdded = () => {
  // A "if" statement for if there is no state just return \\

  if (!this.state.Route) return;
  if (!this.state.NumberPlate) return;


  // Here is where the Taxi Info page will add its data to Firebase "Real Time Database" \\ 

 const autoId = rootRef.push().key
 rootRef.child(autoId)
 .set(
   {
   "Created At" : firebase.database.ServerValue.TIMESTAMP,
   "Taxi Route": this.state.Route,
   "Taxi Number Plate": this.state.NumberPlate,
   "Over Charged Checked": this.state.OverCharge,
   "Bad Driving Checked":this.state.BadDriving,
   "Lost Item Checked":this.state.LostItem,
   "Taxi Condition Checked":this.state.TaxiCondition,
   "Compliments": this.state.Compliments,
   "Other Details Checked": this.state.Other,
   "More Details":this.state.MoreDetails,
  }
  
  )

    this.resetTaxiFields();
    this.alertMessageOnnSubmit();

  }



  render() {


    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.Os == "ios" ? "padding" : "height"}
          enabled
        >

          <ImageOverlay 
          source={require('../images/bg-map.png')} 
          overlayColor={"white"}
          overlayAlpha={0.2} 
          height={"100%"}
          >

            <Block style={styles.LetsTalkContainer}>

                <Block flex center >
                      <Block  middle style={{marginTop:20}}>
                          <Image 
                          style={{width: 80, height: 80,}}
                          source={require('../images/khomba-white.png')}
                          />
                      </Block>
                      <Block width={width * 0.8} middle>
                        <Text size={20} style={{color:"white",marginBottom:10}}>" Taxi "</Text>
                      </Block>
                      
                      <Block width={width * 0.9} middle>
                        <Text size={12} style={{color:"white",margin:20,}}>" Have feedback or a want to report your experience? "</Text>
                      </Block>
                      <Block flex center style={styles.InputContainer}>
                            <Block style={{marginBottom:15}}>
                              <TextInput
                              style={styles.inputLetsTalk}
                                borderless
                                placeholder="Taxi Route"
                                placeholderTextColor="white"
                                value={this.state.Route}
                                onChangeText={(text) => this.setState({Route: text})}
                                ref={(r) => { this._textInputRef = r; }}
                              />
                            </Block>
 
                            <Block  style={{marginBottom:15}}>
                              <TextInput
                                style={styles.inputLetsTalk}
                                borderless
                                placeholder="Taxi Number Plate"
                                autoCapitalize={"characters"}
                                placeholderTextColor="white"
                                value={this.state.NumberPlate}
                                onChangeText={(text)=> this.setState({NumberPlate: text.toUpperCase()})}
                                ref={(r) => { this._textInputRef = r; }}
                              />
                            </Block>

                            <Block style={styles.ButtonContainer}>
                                    
                                    <Block style={styles.IdividualCheckButtonContainer}>
                                    <CheckBox
                                      center
                                      title='Over-Charged'
                                      checkedIcon='dot-circle-o'
                                      uncheckedIcon='circle-o'
                                      size={13}
                                      textStyle={styles.CheckBoxContent}
                                      containerStyle={styles.CheckBoxContainer}
                                      checked={this.state.OverCharge}
                                      onPress={() => this.setState({OverCharge: !this.state.OverCharge})}
                                    />
                                    </Block>

                                    <Block style={styles.IdividualCheckButtonContainer}>
                                    <CheckBox
                                      center
                                      title='Bad Driving'
                                      checkedIcon='dot-circle-o'
                                      uncheckedIcon='circle-o'
                                      size={13}
                                      textStyle={styles.CheckBoxContent}
                                      containerStyle={styles.CheckBoxContainer}
                                      checked={this.state.BadDriving}
                                      onPress={() => this.setState({BadDriving: !this.state.BadDriving})}
                                      />
                                    </Block>

                                    <Block style={styles.IdividualCheckButtonContainer}>
                                    <CheckBox
                                      center
                                      title='Lost Item'
                                      checkedIcon='dot-circle-o'
                                      uncheckedIcon='circle-o'
                                      size={13}
                                      textStyle={styles.CheckBoxContent}
                                      containerStyle={styles.CheckBoxContainer}
                                      checked={this.state.LostItem}
                                      onPress={() => this.setState({LostItem: !this.state.LostItem})}
                                      />
                                    </Block>

                                </Block>

                                <Block style={styles.ButtonContainer}>
                                    


                                    <Block style={styles.IdividualCheckButtonContainer}>
                                    <CheckBox
                                      center
                                      title='Taxi Condition'
                                      checkedIcon='dot-circle-o'
                                      uncheckedIcon='circle-o'
                                      size={13}
                                      textStyle={styles.CheckBoxContent}
                                      containerStyle={styles.CheckBoxContainer}
                                      checked={this.state.TaxiCondition}
                                      onPress={() => this.setState({TaxiCondition: !this.state.TaxiCondition})}
                                      />
                                    </Block>

                                    <Block style={styles.IdividualCheckButtonContainer}>
                                    <CheckBox
                                      center
                                      title='Compliments'
                                      checkedIcon='dot-circle-o'
                                      uncheckedIcon='circle-o'
                                      size={13}
                                      textStyle={styles.CheckBoxContent}
                                      containerStyle={styles.CheckBoxContainer}
                                      checked={this.state.Compliments}
                                      onPress={() => this.setState({Compliments: !this.state.Compliments})}
                                        
                                      />
                                    </Block>

                                    <Block style={styles.IdividualCheckButtonContainer}>
                                    <CheckBox
                                      center
                                      title='Other'
                                      checkedIcon='dot-circle-o'
                                      uncheckedIcon='circle-o'
                                      size={13}
                                      textStyle={styles.CheckBoxContent}
                                      containerStyle={styles.CheckBoxContainer}
                                      checked={this.state.Other}
                                      onPress={() => this.setState({Other: !this.state.Other})}
                                      
                                      />
                                    </Block>

                                </Block>


                            <Block style={{marginBottom:15,}}>
                              <TextInput
                                style={styles.inputLetsTalkMoreDetails}
                                borderless
                                placeholder="More Details"
                                placeholderTextColor="white"
                                multiline={true} 
                                numberOfLines={30} 
                                maxLength={1000}
                                value={this.state.MoreDetails}
                                onChangeText={(text)=> this.setState({MoreDetails:text})}
                                ref={(r) => { this._textInputRef = r; }}
                              />
                            </Block>

                            <Block  flexDirection="row"  style={styles.inputLetsTalkButton} >
                            <Button                                   
                              title="Submit"
                              color="white"
                              onPress={this.onTaxiInfoAdded}
                              // onPress={() => addTaxiInfo({
                              //   Route: this.state.TaxiRoute,
                              //   NumberPlate: this.state.NumberPlate,
                              //   // Complaint: this.state.Complaint,
                              //   MoreDetails: this.state.MoreDetails,
                              // },
                              //  this.onTaxiInfoAdded
                              // )} 
                            />
                            </Block>
                      </Block>
                      
                </Block>
            </Block>
        </ImageOverlay>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  LetsTalkContainer: {
    width: width * 0.85,
    height: height * 0.85,
    backgroundColor:'#2A2E43',
    borderRadius:12,
  },



  InputContainer:{
    width: width * 0.6,
    height: height * 0.7,
  },

  inputLetsTalk:{
    width:280,
    height:45,
    backgroundColor:"#353A50",
    color:'white',
    paddingLeft:20,
    borderRadius:12,
  
  },

  inputLetsTalkMoreDetails:{
    width:280,
    height:60,
    backgroundColor:"#353A50",
    color:'white',
    paddingLeft:20,
    paddingTop:10,
    borderRadius:12,
  
  },

  inputLetsTalkButton:{
    width:280,
    height:45,
    backgroundColor:"#0082B3",
    borderRadius:12,
    justifyContent:'center'
  
  }, 


  ButtonContainer:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width: width * 0.6,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10
},

  IdividualCheckButtonContainer:{
    width: 100,

  },

  CheckBoxContainer:{
    backgroundColor:'#2A2E43',
    borderColor:'#2A2E43',
    padding:0,
  },

  CheckBoxContent:{
    fontSize:8,
    color:'white',
  },

ImageContainer:{
    width:50, 
    height:50,
    paddingLeft:20, 
    borderRadius:25,

},
  
});

export default Taxi;
