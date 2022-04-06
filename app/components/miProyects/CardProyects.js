import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {Card, LinearProgress} from "react-native-elements"
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function CardsProyects() {
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>

      <LinearGradient
              // Background Linear Gradient
                colors={['rgba(39,103,187,1) 10.4%', 'transparent']}
                style={styles.background}
             />
      <ScrollView>

      <Card containerStyle={styles.cardStyle}>  
          <Card.Title style={styles.titletext}>Gestión De Oficios</Card.Title>
          <LinearProgress color="#0CCDAC" variant="determinate" value={1}/>
          <Text style={styles.styleText}>
          Sistema para llevar el control de todos los medicamentos
          </Text>
          <Card.Divider/>
          <View style={styles.container}>
          </View>
        </Card>

        <Card containerStyle={styles.cardStyle}>
          <Card.Title style={styles.titletext}>Gestión De Oficios</Card.Title>
          <LinearProgress color="#0CCDAC" variant="determinate" value={30}/>
          <Text style={styles.styleText}>
          Sistema para llevar el control de todos los medicamentos
          </Text>
          <Card.Divider/>
          <View style={styles.container}>
          </View>
        </Card>

        
          
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle:{
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 120,
    marginRight:10,
    marginLeft:10
  },
  styleText:{
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 10,
  },
  titletext: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 20,
    marginTop:5,
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
  
});