 import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer';

const RootStack = () => {
  return (
    <NavigationContainer>
        <Drawer />
    </NavigationContainer>
  )
}

export default RootStack

  