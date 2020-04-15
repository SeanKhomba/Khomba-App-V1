import React from "react";
import {
  StyleSheet,
  Dimensions,
  Button,
  Image,
  Alert
} from "react-native";
import { Block, Button as GaButton,Text} from "galio-framework";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

class Onboarding extends React.Component {
  
  render() {

    const { navigation } = this.props;

    return (
          <Block style={styles.OnboardingContainer}>
              
            <Block flex center style={styles.OnboardingContent}>                   

                      <Block  middle style={{marginTop:50}}>
                          <Image 
                          style={{width: 120, height: 120}}
                          source={require('../images/ic.png')}
                          />
                      </Block>

                      <Block width={width * 0.9} middle>
                        <Text size={20} style={{margin:10,}}>Taxi Regulations</Text>
                      </Block>
    
                      <Block width={width * 0.9} middle>
                        <Text size={13} style={{margin:10 }}>" Transport revises taxi regulations during lockdown "</Text>
                      </Block>
                      <ScrollView
                        vertical={true} 
                        width={width * 0.8}
                        style={{ marginTop:"20%",bottom:"10%"}}
                        showsVerticalScrollIndicator={false}
                      >
                            <Block width={width * 0.8} >

                                <Text size={12} style={{margin:5 }}>
                                Wednesday, April 1, 2020
                                </Text>

                                <Text size={12}  style={{margin:5}}>
                                Transport Minister Fikile Mbalula has announced revised regulations that call on the taxi industry to among others, reduce the number of passengers ferried per ride during the 21-day nationwide lockdown, implemented to curb the spread of COVID-19.
                                </Text>

                                <Text size={12}  style={{margin:5}}>
                                He addressed the media at the Noord Taxi Rank on Wednesday, shortly after addressing traffic officers who have been deployed to ensure compliance with the published regulations during the lockdown. 
                                </Text>

                                <Text size={12}  style={{margin:5}}>                        
                                Under the regulations, passenger numbers are determined according to the licensed capacity of the vehicle.
                                </Text>

                                <Text size={12}  style={{margin:5}}>
                                During the lockdown period, the following public transport vehicles must reduce the number of maximum passengers to 70% of the licensed capacity, with no masks as follows:
                                </Text>
                                  <Text size={12} style={{margin:5 }}> 
                                      • A minibus licensed to carry 10 passengers is limited to carry a maximum of 7 passengers.
                                  </Text>
                                  <Text size={12} style={{margin:5 }}> 
                                      • A minibus licensed to carry 15 passengers is limited to carry a maximum of 10 passengers.
                                  </Text>
                                  <Text size={12} style={{margin:5, }}> 
                                      • A midi-bus permitted to carry a maximum of 22 passengers, is limited to carry a maximum of 15 passengers.
                                  </Text>
                                  <Text size={12} style={{margin:5}}> 
                                      • A vehicle licensed to carry a maximum of four passengers is limited to carrying 50% of its permissible passenger carrying capacity.
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  Alternatively, all minibus and midi-bus taxi vehicles are permitted to load their maximum 100% passenger loading capacity as provided for in their operating licenses, provided that all passengers are wearing masks. 
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  The masks must be either surgical masks or N95 respiratory masks.
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  Mbalula further reiterated the call for public transport operators to sanitise vehicles.
                                  </Text>


                                  <Text size={12} style={{margin:5}}> 
                                  During the lockdown, taxis are only allowed to ferry a limited number of people as a measure to curb the spread of COVID-19.
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  Under the regulations announced by the Minister following the declaration of COVID-19 as a National State of Disaster, public modes of transport were allowed to operate from 5am - 9am and again from 4pm - 8pm. However, these times have now been revised to 5am - 10am and again from 4pm to 8pm.
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  Following consultations with the taxi industry - in particular South African National Taxi Council (SANTACO) and the National Taxi Alliance (NTA) on Wednesday - Mbalula said the revised regulations will contribute to the preservation of life.
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  “Despite the economic challenges faced in the industry we were able to reach an agreement that guarantees continuous availability of public transport during the lockdown period.
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  “We must all appreciate that the measures we have introduced to curb the spread of this virus are about preserving human life and not about our individual narrow self-serving interest. Everyone must appreciate this and play their part,” he said.
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  Post the lockdown period, the Minister said government will prioritise the National Taxi Indaba, which will tackle pressing and strategic issues facing the taxi industry. 
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  The taxi industry operates on the fringes of the formal economy despite having the largest market share of all public transport modes, in excess of 60%. 
                                  </Text>

                                  <Text size={12} style={{margin:5}}> 
                                  In light of the payment of social grants, which got underway on Monday, Mbalula amended the public transport directions under the National State of Disaster. Effective only between 30 March 2020 and Friday, 3 April 2020, buses and taxis are permitted to operate from 5am until 8pm. – SAnews.gov.za
                                  </Text>

                            </Block>

                      </ScrollView>
                      <Block width={width * 0.8} flexDirection="row" style={styles.OnboardingBotton} >
                          <Button                       
                            onPress={() => navigation.navigate("ProductPage")}            
                            title="Get Started!"
                            color="white"
                          />
                      </Block>
                      

            </Block>
          </Block>
    );
  }
}

const styles = StyleSheet.create({
  OnboardingContainer: {
    width: width,
    height: height,
    backgroundColor: "#F4F5F7",
  },


  OnboardingContent:{
    width:width,
  },

  OnboardingBotton:{
    width:320,
    height:55,
    bottom:"10%",
    backgroundColor:"#0082B3",
    paddingTop:10,
    borderRadius:12,
    justifyContent:'center'
  
  },

});

export default Onboarding;