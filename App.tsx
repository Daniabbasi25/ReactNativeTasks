import 'react-native-gesture-handler';
import {  SafeAreaView } from 'react-native'
import React from 'react'
import { RootStack } from '@navigation'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
     <RootStack />
    </SafeAreaView>
  )
}

export default App