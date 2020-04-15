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
import { Block, Button as GaButton, theme, Text} from "galio-framework";
import ImageOverlay from "react-native-image-overlay";
// import {addTaxiInfo} from '../Services/LetsTalkApi';
import * as firebase from 'firebase';
import 'firebase/firestore';
const { width, height } = Dimensions.get("window");

// The Cridentials for  " Fiebase API " if error  \\ 

// const config = {
//   apiKey: "AIzaSyAsRnlXOPUAE_HnxRR3KdHJvx_cDeJC338",
//   authDomain: "khomba-4c69f.firebaseapp.com",
//   databaseURL: "https://khomba-4c69f.firebaseio.com",
//   projectId: "khomba-4c69f",
//   storageBucket: "khomba-4c69f.appspot.com",
//   messagingSenderId: "335809381952",
//   appId: "1:335809381952:web:ff1c0485b54346484941a5"
// };
// firebase.initializeApp(config);

// varabiles for the firebase method " onTaxiInfoAdded " \\ 

const database = firebase.database();
const rootRef = database.ref('Taxi Rank');


class TaxiRank extends React.Component {
 
  constructor() {
    super();
    this.state ={
      Destination:"",
      Harassment:false,
      Safety:false,
      LostItem:false,
      Compliments:false,
      Other:false,
      MoreDetails:"",
    }
    this.onTaxiRankInfoAdded = this.onTaxiRankInfoAdded.bind(this);
  }

  
            // This below is the method that inserts input data ro the Real Time Database in Firebase \\ 


  // A Method clearing the feilds after submitted form below  \\  

resetTaxiRankFields() {

  this.setState({Destination: ''}),
  this.setState({Harassment: false }),
  this.setState({Safety: false }),
  this.setState({LostItem: false }),
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

  onTaxiRankInfoAdded = () => {

  // A "if" statement for if there is no state just return \\

  if (!this.state.Destination) return;
  if (!this.state.MoreDetails) return;


  // Here is where the Taxi Rank Info page will add its data to Firebase "Real Time Database" \\ 

 const autoId = rootRef.push().key
 rootRef.child(autoId)
 .set(
   {
   "Created At" : firebase.database.ServerValue.TIMESTAMP,
   "Destination": this.state.Destination,
   "Harassment Checked": this.state.Harassment,
   "Saftey Checked":this.state.Safety,
   "Lost Item Checked":this.state.LostItem,
   "Compliments": this.state.Compliments,
   "Other Details Checked": this.state.Other,
   "More Details":this.state.MoreDetails,
  }
  
  )

    this.resetTaxiRankFields();
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

                <Block flex center>
                        <Block  middle style={{marginTop:20}}>
                            <Image 
                            style={{width: 80, height: 80}}
                            source={require('../images/khomba-white.png')}
                            />
                        </Block>
                        <Block width={width * 0.8} middle>
                          <Text size={20} style={{color:"white",marginBottom:10}}>" Taxi Rank "</Text>
                        </Block>
                        
                        <Block width={width * 0.9} middle>
                          <Text size={12} style={{color:"white",margin:20,}}>" Have feedback or a want to report your experience? "</Text>
                        </Block>
                        <Block flex center style={styles.InputContainer}>
                              <Block style={{marginBottom:15}}>
                                <TextInput
                                style={styles.inputLetsTalk}
                                  borderless
                                  placeholder="Taxi Rank Location"
                                  placeholderTextColor="white"
                                  autoCompleteType='name'
                                  value={this.state.Destination}
                                  onChangeText={(text)=> this.setState({Destination:text})}
                                />
                              </Block>

                              <Block style={styles.ButtonContainer}>
                                      
                                      <Block style={styles.IdividualCheckButtonContainer}>
                                        <CheckBox
                                          center
                                          title='Harassment'
                                          checkedIcon='dot-circle-o'
                                          uncheckedIcon='circle-o'
                                          size={13}
                                          textStyle={styles.CheckBoxContent}
                                          containerStyle={styles.CheckBoxContainer}
                                          checked={this.state.Harassment}
                                          onPress={() => this.setState({Harassment: !this.state.Harassment})}
                                          
                                          
                                        />
                                      </Block>

                                      <Block style={styles.IdividualCheckButtonContainer}>
                                      <CheckBox
                                          center
                                          title='Safety'
                                          checkedIcon='dot-circle-o'
                                          uncheckedIcon='circle-o'
                                          size={13}
                                          textStyle={styles.CheckBoxContent}
                                          containerStyle={styles.CheckBoxContainer}
                                          checked={this.state.Safety}
                                          onPress={() => this.setState({Safety: !this.state.Safety})}
                                          
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
                                          title='Compliment'
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
                                  onChangeText={(text)=> this.setState({MoreDetails: text})}
                                  // onChangeText={(text)=> this.setState(prevState =>({MoreDetails: prevState.MoreDetails = text}))}
                                />
                              </Block>

                              <Block  flexDirection="row"  style={styles.inputLetsTalkBotton} >
                              <Button                                 
                                title="Submit"
                                color="white"
                                onPress={this.onTaxiRankInfoAdded}
                                // onPress={() => addTaxiInfo({
                                //   Destination: this.state.Destination,
                                //   Complaint: this.state.Complaint,
                                //   MoreDetails: this.state.MoreDetails,
                                // },
                                //  this.onTaxiRankInfoAdded
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
    height: height * 0.75,
    backgroundColor:'#2A2E43',
    borderRadius:12,
  },

  InputContainer:{
    width: width * 0.6,


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

  inputLetsTalkBotton:{
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
    width:100,
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

export default TaxiRank;
