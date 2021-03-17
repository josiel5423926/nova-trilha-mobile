import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import Login from '../Views/Login'
import Home from '../Views/Home'
import Vagas from '../Views/Vagas'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
  return (
    
    <routeDrawer.Navigator initialRouteName="Login">
      <routeDrawer.Screen name="Login" component={Login}/>
      <routeDrawer.Screen name="Home" component={Home}/>
      <routeDrawer.Screen name="Vagas" component={Vagas}/>
    </routeDrawer.Navigator>
  )
}

export default Drawer
