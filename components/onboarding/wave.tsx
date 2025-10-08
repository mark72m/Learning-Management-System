import React from 'react'
import { Text, View } from 'react-native'
import Animated, { useDerivedValue } from 'react-native-reanimated'
import { Path } from 'react-native-svg'


const AnimatedPath = Animated.createAnimatedComponent(Path)
export default function Wave() {
  const R =  useDerivedValue(() => {
    const value = Math.min(position.x.value)

  })
  return (
    <View>
      <Text>Wave</Text>
    </View>
  )
}