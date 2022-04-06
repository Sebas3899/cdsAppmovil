import React, { useState,useEffect } from 'react';
import { LogBox } from 'react-native';
import Navigation from "./app/navigation/Navigation"
import NavigationLogin from './app/components/StackLogin/NavigationLogin';


export default function App() {
  LogBox.ignoreAllLogs(true)
  const [exitsSesion,setExitsSession]=useState(false)
  const [reload,setReload]=useState()

  useEffect(()=>{
    console.log("Entro al effect");
    setReload(false)
  },[reload])
  return exitsSesion ? <Navigation/> :  <NavigationLogin  setReload={setReload}/>
}
