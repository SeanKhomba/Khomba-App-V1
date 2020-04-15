import React, { Component } from "react";
import { View, Text, StyleSheet,Button,Dimensions, TouchableHighlight, Image,  ScrollView,} from "react-native";
import { SafeAreaView } from "react-navigation";
import ImageOverlay from "react-native-image-overlay";
import { Block, Button as GaButton, theme } from "galio-framework";
const { width, height } = Dimensions.get("window");

class ProductPage extends Component {
    render(){

        const { navigation } = this.props;

        return (
                <SafeAreaView style={styles.Product}>
                        <Block style={styles.TaxiBackground}>
                            <ImageOverlay 
                            style={styles.OverlayImage} 
                            source={require('../images/khombataxirank.png')} 
                            overlayColor={"black"}
                            overlayAlpha={0.4} >
                                <Block style={ styles.TaxiInfo }>
                                    <Text style={{fontSize:40,color:"white",fontWeight:"bold"}}>Bree Taxi Rank </Text>
                                    <Text style={{fontSize:12,color:"white",}}>Commonly Known as Bree</Text>
                                    <Text style={{fontSize:12,color:"white",}}>Opening Times : 05:00 - 22:00</Text>
                                </Block>
                            </ImageOverlay>
                        </Block>

                        <Block style={styles.TaxiCarouselContainer}>
                                <View style={styles.TaxiCarouselList} >
                                    <ScrollView scrollEventThrottle={1} horizontal='true' showsHorizontalScrollIndicator={false} >

                                            < View style={{flexDirection:'row', justifyContent:'center',}}> 
                                                <View style={styles.CircleShapeView}>
                                                    <Text style={{ color:'white',width:45, height:45, padding:12}}>R12</Text>
                                                </View>
                                                <View style={styles.CarouselSliderInfo}>
                                                    <Text style={{fontWeight:'bold', color:'white'}}>Destination - Lane</Text>
                                                    <Text style={{width:220, color:'white', paddingTop:10}}>Stay safe while you on the move, Bree Taxi Rank is on the corner of Lilian Ngoyi St & Pixley Seme St</Text>
                                                </View>
                                            </View>

                                            < View style={{flexDirection:'row'}}> 
                                                <View style={styles.CircleShapeView}>
                                                    <Text style={{ color:'white',width:45, height:45, padding:12}}>R12</Text>
                                                </View>
                                                <View style={styles.CarouselSliderInfo}>
                                                    <Text style={{fontWeight:'bold', color:'white'}}>Booysens - Lane $</Text>
                                                    <Text style={{width:220, color:'white', paddingTop:10}}>Stay safe while you on the move, Bree Taxi Rank is on the corner of Lilian Ngoyi St & Pixley Seme St</Text>
                                                </View>
                                            </View>

                                            < View style={{flexDirection:'row'}}> 
                                                <View style={styles.CircleShapeView}>
                                                    <Text style={{ color:'white',width:45, height:45, padding:12}}>R12</Text>
                                                </View>
                                                <View style={styles.CarouselSliderInfo}>
                                                    <Text style={{fontWeight:'bold', color:'white'}}>Booysens - Gold Reef City - South Gate</Text>
                                                    <Text style={{width:220, color:'white', paddingTop:10}}>Stay safe while you on the move, Bree Taxi Rank is on the corner of Lilian Ngoyi St & Pixley Seme St</Text>
                                                </View>
                                            </View>
                                    </ScrollView>
                                </View>
  

                                <Block style={styles.ButtonContainer}>
                                    
                                    <Block style={styles.IdividualButtonContainer1}>
                                        <TouchableHighlight onPress={() => navigation.navigate("LetsTalk")}>
                                            <Image  source={require('../images/lets-talk.png')} style={styles.ImageContainer1}/>
                                        </TouchableHighlight>
                                        <TouchableHighlight center onPress={() => navigation.navigate("LetsTalk")}>
                                          <Text style={{paddingTop:10, color:'white'}}>Let's Talk</Text>  
                                        </TouchableHighlight>
                                    </Block>

                                    <Block style={styles.IdividualButtonContainer2}>
                                        <TouchableHighlight onPress={() => navigation.navigate("ChatScreen")}>
                                            <Image  source={require('../images/hire-taxi.png')} style={styles.ImageContainer2}/>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => navigation.navigate("ChatScreen")}>
                                           <Text style={{paddingTop:10,paddingLeft:10, color:'white'}}>Chat</Text> 
                                        </TouchableHighlight>
                                    </Block>

                                    {/* <Block style={styles.IdividualButtonContainer}>
                                        <TouchableHighlight onPress={() => navigation.navigate("LetsTalk")}>
                                            <Image  source={require('../images/updates.png')} style={styles.ImageContainer}/>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={() => navigation.navigate("LetsTalk")}>
                                            <Text style={{paddingTop:10, color:'white'}}>Updates</Text>
                                        </TouchableHighlight>
                                    </Block> */}

                                </Block>


                                <Block style={styles.TwoImageContainer}>
                                        
                                        <Block style={{ flex:1,width:width,}}>
                                            <Block style={{justifyContent:'center', alignItems:'flex-end',  }}>
                                                <TouchableHighlight onPress={() => navigation.navigate("MapPage")} > 
                                                    <Image source={require('../images/ProductMap.png')}
                                                    style={{ width:150, height:140, padding:0 , borderRadius:20, resizeMode:'cover'}}
                                                    />
                                                </TouchableHighlight>
                                            </Block>
                                        </Block>

                                        <Block style={{ flex:1, marginLeft:40,width:width,}}>
                                            <Block style={{justifyContent:'center', alignItems:'flex-start',  }}>
                                                    <Image source={require('../images/signs/point1up.png')}
                                                    style={{ width:150, height:140, padding:0 , borderRadius:10, resizeMode:'cover'}}
                                                    />
                                            </Block>
                                        </Block>

                                </Block>


                            {/* The option button at the bottom of the product page  */}

                                <Block style={styles.ButtonContainer}>
                                    <Block style={styles.buttonOption}>
                                            <Button 
                                            onPress={() => navigation.navigate("LetsTalk")}            
                                            title="Khomba"
                                            color='white'
                                            /> 
                                    </Block>
                                </Block>

                        </Block>
                </SafeAreaView>

        );
    }
}


export default ProductPage;


const styles = StyleSheet.create({

    Product: {
        
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        height:height,
        width:width,
        
      },

    TaxiBackground:{
        width:width,
    }, 

    OverlayImage:{
        zIndex:0, 
        width: '100%', 
        height: '100%',
    },

    TaxiInfo:{
        position:'absolute',
        bottom:'5%',
        left:'8%',
        color:'white',
        fontWeight:"bold",
    },

    TaxiCarouselContainer:{ 
        width:width,
        height:height,
        backgroundColor:'rgba(42,46,67,1)',
    },

    TaxiCarouselList:{
        height:80, 
        paddingLeft:30, 
        paddingRight:30, 
        marginTop:20,
        marginBottom:10,
    },

    CircleShapeView: {
        marginLeft:15,
        marginRight:15,
        width: 44,
        height: 44,
        borderRadius: 44/2,
        backgroundColor: '#0082B3'
    },

    CarouselSliderInfo:{
        paddingLeft:0, 
        height: '100%' 
    },

    ButtonContainer:{
        paddingTop:5,
        paddingBottom:5,
        flexDirection:'row',
    },


    IdividualButtonContainer1:{
        flex:1,
        justifyContent:'flex-end',
        paddingRight:30, 
        alignItems:'flex-end',
    },

    ImageContainer1:{
        width:50, 
        height:50,
        marginRight:4,
        borderRadius:25,

    },
    
    IdividualButtonContainer2:{
        flex:1,
        justifyContent:'flex-start', 
        paddingLeft:30,
        alignItems:'flex-start',
    },



       ImageContainer2:{
        width:50, 
        height:50,
        marginLeft:2,
        borderRadius:25,

    },

    TwoImageContainer:{
        flexDirection: 'row' , 
        width:width,
        paddingTop:20, 
        paddingRight:10,
        paddingBottom:20,
        marginLeft:5,
        marginRight:5,
    },

 

    ButtonContainer:{
        width:width,
        flexDirection:"row",
        justifyContent:"space-around",
    },

    buttonOption:{
        width: 300,
        height: 50,
        paddingHorizontal: theme.SIZES.BASE,
        paddingVertical: 6,
        backgroundColor:"#0082B3",
        borderRadius:10,
    },

     

  });