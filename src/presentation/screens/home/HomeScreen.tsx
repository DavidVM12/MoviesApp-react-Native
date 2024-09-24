import React from 'react'
import { Text, View } from 'react-native'
import { useMovie } from '../../hooks/useMovie'

export const HomeScreen = () => {


  const {} = useMovie();

  return (
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}
