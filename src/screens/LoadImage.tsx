import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const LoadImage = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: 'https://unsplash.it/400/400?image=1',
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
    </View>
  )
}

export default LoadImage

const styles = StyleSheet.create({})