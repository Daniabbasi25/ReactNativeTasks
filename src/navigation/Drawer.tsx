import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoadImage from 'screens/LoadImage';
 

const DrawerStack = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Load Image" component={LoadImage} />
       
    </DrawerStack.Navigator>
  )
}

export default Drawer