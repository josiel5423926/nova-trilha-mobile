import React from "react";

//import Button from "../components/Button";

import {Text,  StyleSheet, View } from 'react-native';
import {CardImg} from 'reactstrap';
import Exemple from '../components/home';


//import TextCenter from "../components/TextCenter";

const Home = (props) => {
  return (
    <View style={estilos.container}>
    <CardImg  className="mw-auto  p-5"  src={require('../../assets/img/nova-trilha-logo2.png')} alt="Card image cap" />

      <Exemple/>
      
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