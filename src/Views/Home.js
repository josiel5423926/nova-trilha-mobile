import React from "react";

//import Button from "../components/Button";

import {Text,  StyleSheet, View } from 'react-native'
import {CardImg} from 'reactstrap';


//import TextCenter from "../components/TextCenter";

const Home = (props) => {
  return (
    <View style={estilos.container}>
    <h1>Seja Bem vindo</h1>

      
      <CardImg  top  width="5%"  src={require('../../assets/img/nova-trilha-logo2.png')} alt="Card image cap" />

    </View>
  );
};

export default Home;



const estilos = StyleSheet.create({
    container: {
        flex: 1, 
        //FlexDirectin: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5bc0de'
    }   
})   
