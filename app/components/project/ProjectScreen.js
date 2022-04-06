import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon, SearchBar } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';
export default function ProjectScreen() {
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
      <LinearGradient
              // Background Linear Gradient
                colors={['rgba(39,103,187,1) 10.4%', 'transparent']}
                style={styles.background}
             />
      <ScrollView>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.titletext}>Gestión De Oficios</Card.Title>
          <Text style={styles.styleText}>
            Proyecto que agilizara el proceso de ....
          </Text>
          <Card.Divider/>
          <View style={styles.container}>
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="check" size={20} color="white" />}
            />
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="close" size={20} color="white" />}
            />
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.titletext}>Punto de Venta</Card.Title>
          <Text style={styles.styleText}>
            Punto de venta para el control de ....
          </Text>
          <Card.Divider/>
          <View style={styles.container}>
            <Button
              style={styles.button}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="check" size={20} color="white" />}
            />
            <Button
              style={styles.button}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="close" size={20} color="white" />}
            />
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.titletext}>
            Gestion de Becarios del Cds
          </Card.Title>
          <Text style={styles.styleText}>
            Sistema que manejara el proceso de ...
          </Text>
          <Card.Divider/>
          <View style={styles.container}>
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="check" size={20} color="white" />}
            />
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="close" size={20} color="white" />}
            />
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.titletext}>Cafeteria Halconez</Card.Title>
          <Text style={styles.styleText}>
            Sistema de punto de venta para ...
          </Text>
          <Card.Divider/>
          <View style={styles.container}>
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="check" size={20} color="white" />}
            />
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="close" size={20} color="white" />}
            />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 120,
    marginRight:10,
    marginLeft:10
  },
  styleText: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 10,
  },
  button: {
    width: 30,
    backgroundColor: "#0368C0",
    color: "#0368C0",
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  btnContainer:{
    marginTop: 10
  },
  titletext: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
});