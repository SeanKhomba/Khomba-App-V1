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
  Keyboard,
} from "react-native";
import { CheckBox } from 'react-native-elements'
import { Block, Button as GaButton, Text} from "galio-framework";
import ImageOverlay from "react-native-image-overlay";
import DatePicker from 'react-native-datepicker';
// import {addTaxiInfo} from '../Services/LetsTalkApi';
import * as firebase from 'firebase';
import 'firebase/firestore';
const { width, height } = Dimensions.get("window");


// varabiles for the firebase method " onDriverInfoAdded " \\ 

const database = firebase.database();
const rootRef = database.ref('Taxi Driver');

class TaxiDriver extends React.Component {
  constructor() {
    super();
    this.state ={
      Route:"",
      NumberPlate:"",
      CommuteDate:"",
      Harassment:false,
      BadDriving:false,
      Intoxicated:false,
      Compliments:false,
      Other:false,
      MoreDetails:"",
    }
    this.onDriverInfoAdded = this.onDriverInfoAdded.bind(this);
  }

  
            // This below is the method that inserts input data ro the Real Time Database in Firebase \\ 


  // A Method clearing the feilds after submitted form below  \\  

resetTaxiDriverFields() {

  this.setState({Route: ''}),
  this.setState({NumberPlate: ''}),
  this.setState({CommuteDate: ''}),
  this.setState({Harassment: false }),
  this.setState({BadDriving: false }),
  this.setState({Intoxicated: false }),
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




  onDriverInfoAdded = () => {

  // A "if" statement for if there is no state just return \\

  if (!this.state.Route) return;
  if (!this.state.NumberPlate) return;
  if (!this.state.CommuteDate) return;
  if (!this.state.MoreDetails) return;


  // Here is where the Driver Info page will add its data to Firebase "Real Time Database" \\ 

 const autoId = rootRef.push().key
 rootRef.child(autoId)
 .set(
   {
   "Created At" : firebase.database.ServerValue.TIMESTAMP,
   "Taxi Route": this.state.Route,
   "Taxi Number Plate": this.state.NumberPlate,
   "Date": this.state.CommuteDate,
   "Harassment Checked": this.state.Harassment,
   "Bad Driving Checked":this.state.BadDriving,
   "Intoxicated Checked":this.state.Intoxicated,
   "Compliments": this.state.Compliments,
   "Other Details Checked": this.state.Other,
   "More Details":this.state.MoreDetails,
  }
  
  )

    this.resetTaxiDriverFields();
    this.alertMessageOnnSubmit();


  }


  render() {

    const { navigation } = this.props;

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
                        <Text size={20} style={{color:"white",marginBottom:10}}>" Driver "</Text>
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
                                onChangeText={(text)=> this.setState({Route: text})}
                              />
                            </Block>

                            <Block  style={{marginBottom:15}}>
                              <TextInput
                                style={styles.inputLetsTalk}
                                borderless
                                placeholder="Taxi Number Plate"
                                placeholderTextColor="white"
                                autoCapitalize={"characters"}
                                value={this.state.NumberPlate}
                                onChangeText={(text)=> this.setState({NumberPlate:text})}
                              />
                            </Block>

                            <Block style={{marginBottom:15}}>
                              <DatePicker
                                style={styles.inputLetsTalkDatePicker}
                                date={this.state.CommuteDate}
                                mode="date"
                                placeholder="DD-MM-YYYY"
                                format="DD-MM-YYYY"
                                minDate="01-01-2019"
                                maxDate="30-12-2020"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                isDarkModeEnabled={true}
                                showIcon={false}
                                customStyles={{
                                  placeholderText: {
                                    color: '#ffffff',
                                  },

                                  dateText:{
                                    color:"white",
                                  },
                                  dateInput: {
                                    borderWidth:0,
                                    alignItems: "flex-start"
                                  }
                                }}
                                onDateChange={(date) => {this.setState({CommuteDate: date})}}
                              />
                              {/* <TextInput
                                style={styles.inputLetsTalk}
                                borderless
                                placeholder="YYYY/MM/DD"
                                placeholderTextColor="white"
                                keyboardType="number-pad"
                                value={this.state.CommuteDate}
                                onChangeText={(text)=> this.setState({CommuteDate: text})}
                              /> */}
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
                                        title='Intoxicated'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        size={13}
                                        textStyle={styles.CheckBoxContent}
                                        containerStyle={styles.CheckBoxContainer}
                                        checked={this.state.Intoxicated}
                                        onPress={() => this.setState({Intoxicated: !this.state.Intoxicated})}
                                      
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
                                maxLength={1000}
                                value={this.state.MoreDetails}
                                onChangeText={(text)=> this.setState({MoreDetails: text})}
                              />
                            </Block>

                            <Block  flexDirection="row"  style={styles.inputLetsTalkBotton} >
                            <Button                               
                              title="Submit"
                              color="white"
                              onPress={this.onDriverInfoAdded}
                              // onPress={() => addTaxiInfo({
                              //   Route: this.state.TaxiRoute,
                              //   NumberPlate: this.state.NumberPlate,
                              //   CommuteDate: this.state.CommuteDate,
                              //   Complaint: this.state.Complaint,
                              //   MoreDetails: this.state.MoreDetails,
                              // },
                              //  this.onTaxiDriverInfoAdded
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
    height: height * 0.9,
    backgroundColor:'#2A2E43',
    borderRadius:12,
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

  inputLetsTalkDatePicker:{
    width:280,
    height:45,
    backgroundColor:"#353A50",
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

export default TaxiDriver;
