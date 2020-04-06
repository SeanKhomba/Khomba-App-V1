import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Image,
  TextInput,
} from "react-native";
import { CheckBox } from 'react-native-elements'
import { Block, Button as GaButton, theme, Text} from "galio-framework";
import ImageOverlay from "react-native-image-overlay";
import {addTaxiInfo} from '../Services/LetsTalkApi';
const { width, height } = Dimensions.get("screen");

class TaxiDriver extends React.Component {
  constructor() {
    super();
    this.state ={
      Route:"",
      NumberPlate:"",
      CommuteDate:"",

      Complaint :[
        Harassment = false,
        BadDriving = false,
        Intoxicated = false,
        Compliments = false,
        Other = false,
      ], 
      

      MoreDetails:"",
    }
  }

  onTaxiDriverInfoAdded = (Taxi) => {

    console.log('Lets Talk info added ( Taxi Driver )');
    console.log(Taxi);
  
  }

  render() {

    const { navigation } = this.props;

    return (
      <ImageOverlay 
      source={require('../images/bg-map.png')} 
      overlayColor={"white"}
      overlayAlpha={0.2} 
      height={"100%"}
      >

    
            <Block style={styles.LetsTalkContainer}>

                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                      <Block  middle style={{marginTop:20}}>
                          <Image 
                          style={{width: 80, height: 80}}
                          source={require('../images/khomba-white.png')}
                          />
                      </Block>
                      <Block width={width * 0.8} middle>
                        <Text size={20} style={{color:"white",marginBottom:10,paddingLeft:35}}>" Driver "</Text>
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
                                onChangeText={(text)=> this.setState(prevState =>({Route: prevState.Route = text}))}
                              />
                            </Block>

                            <Block  style={{marginBottom:15}}>
                              <TextInput
                                style={styles.inputLetsTalk}
                                borderless
                                placeholder="Taxi Number Plate"
                                placeholderTextColor="white"
                                value={this.state.NumberPlate}
                                onChangeText={(text)=> this.setState(prevState =>({NumberPlate: prevState.NumberPlate = text}))}
                              />
                            </Block>

                            <Block style={{marginBottom:15}}>
                              <TextInput
                                style={styles.inputLetsTalk}
                                borderless
                                placeholder="YYYY/MM/DD"
                                placeholderTextColor="white"
                                autoCompleteType='number'
                                keyboardType="number-pad"
                                value={this.state.CommuteDate}
                                onChangeText={(text)=> this.setState(prevState =>({CommuteDate: prevState.CommuteDate = text}))}
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
                                        checked={this.state.Complaint.Harassment}
                                        onPress={() => this.setState({Harassment: !this.state.Complaint.Harassment})}
                                        
                                        
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
                                        checked={this.state.Complaint.BadDriving}
                                        onPress={() => this.setState({BadDriving: !this.state.Complaint.BadDriving})}
                                        
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
                                        checked={this.state.Complaint.Intoxicated}
                                        onPress={() => this.setState({Intoxicated: !this.state.Complaint.Intoxicated})}
                                      
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
                                        checked={this.state.Complaint.Compliments}
                                        onPress={() => this.setState({Compliments: !this.state.Complaint.Compliments})}
                                        
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
                                        checked={this.state.Complaint.Other}
                                        onPress={() => this.setState({Other: !this.state.Complaint.Other})}
                                      
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
                                onChangeText={(text)=> this.setState(prevState =>({MoreDetails: prevState.MoreDetails = text}))}
                              />
                            </Block>

                            <Block  flexDirection="row"  style={styles.inputLetsTalkBotton} >
                            <Button                               
                              title="Submit"
                              color="white"
                              onPress={() => addTaxiInfo({
                                Route: this.state.TaxiRoute,
                                NumberPlate: this.state.NumberPlate,
                                CommuteDate: this.state.CommuteDate,
                                Complaint: this.state.Complaint,
                                MoreDetails: this.state.MoreDetails,
                              },
                               this.onTaxiDriverInfoAdded
                              )} 
                            />
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
  LetsTalkContainer: {
    width: width * 0.8,
    height: height * 0.7,
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

  inputLetsTalkMoreDetails:{
    width:280,
    height:60,
    backgroundColor:"#353A50",
    color:'white',
    paddingLeft:20,
    borderRadius:12,
  
  },

  inputLetsTalkBotton:{
    width:300,
    height:45,
    backgroundColor:"#0082B3",
    borderRadius:12,
    justifyContent:'center'
  
  }, 


  ButtonContainer:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    flexDirection:'row',
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
