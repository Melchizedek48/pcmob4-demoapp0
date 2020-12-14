import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [loading, setloading] = useState(true);

 return (
   <View style={styles.container}>
     <Text style={styles.title}>Bus arrival time:</Text>
     <Text style={styles.arrivalTime}>
       {loading? "Loading..." : "Loaded"}
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


