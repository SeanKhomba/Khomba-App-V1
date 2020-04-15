import * as firebase from 'firebase';
import 'firebase/firestore';
// import firebase from 'react-native-firebase';

                    // This Below is the Function that sending data to Firebas " Firestore " \\

                     // This is the Taxi Info Function \\

export function addTaxiInfo(taxi, addComplete) {

    firebase.firestore()
      .collection('Taxi')
      .add({
          createdAt : firebase.firestore.FieldValue.serverTimestamp(),
          Route: taxi.Route,
          NumberPlate: taxi.NumberPlate,
          Complaint: taxi.Complaint,
          MoreDetails:taxi.MoreDetails,
      }).then ((snapshot) => snapshot.get())
      .then((taxiData) => addComplete(taxiData.data()))
      .catch((error) => console.log(error));
  }


                       // This is the TaxiRank Info Function \\

export function addTaxiRankInfo(taxiRank, addComplete) {

    firebase.firestore()
      .collection('Taxi Rank')
      .add({
          createdAt : firebase.firestore.FieldValue.serverTimestamp(),
          Destination: taxiRank.Destination,
          Complaint: taxiRank.Complaint,
          MoreDetails:taxiRank.MoreDetails,
      }).then ((snapshot) => snapshot.get())
      .then((taxiRankData) => addComplete(taxiRankData.data()))
      .catch((error) => console.log(error));
  }

                         // This is the TaxiRank Info Function \\

export function addTaxiDriverInfo(taxiDriver, addComplete) {

    firebase.firestore()
      .collection('Taxi Driver')
      .add({
          createdAt : firebase.firestore.FieldValue.serverTimestamp(),
          Route: taxiDriver.Route,
          NumberPlate: taxiDriver.NumberPlate,
          CommuteDate: taxiDriver.CommuteDate,
          Complaint: taxiDriver.Complaint,
          MoreDetails:taxiDriver.MoreDetails,
      }).then ((snapshot) => snapshot.get())
      .then((taxiDriverData) => addComplete(taxiDriverData.data()))
      .catch((error) => console.log(error));
  }


