import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";

const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=10481";

export default function App() {
  const [loading, setloading] = useState(true);

  function loadBusStopData() {
    fetch(BUSSTOP_URL)
    .then((response) => {
      return response.json();
  })
    .then((responseDATA) => {
      // console.log(responseDATA);
      const myBusData = responseData.services.filter (
        (item) => item.no === "63"
      )[0];
      console.log("My Bus:");
      console.log(myBusData);
  });
  }

  useEffect(() => {
    loadBusStopData();
}, []);

 return (
  
   <View style={styles.container}>
     <Text style={styles.title}>Bus arrival time:</Text>
     <Text style={styles.arrivalTime}>
       {loading ? <ActivityIndicator size="large" color="#0000ff" /> : "Loaded"}
       </Text>
     <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Refresh!</Text>
     </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   alignItems: "center",
   justifyContent: "center",
 },
 title: {
   fontWeight: "bold",
   fontSize: 32,
   marginBottom: 24,
 },
 arrivalTime: {
   fontSize: 64,
   marginBottom: 32,
 },
 button: {
   padding: 20,
   backgroundColor: "turquoise",
 },
 buttonText: {
   fontSize: 32,
   fontWeight: "bold",
   color: "white",
 },
});


