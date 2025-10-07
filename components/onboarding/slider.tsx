import { HEIGHT, MIN_Ledge } from '@/configs/constants';
import React, { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useVector } from 'react-native-redash';
import { Side } from './wave';

interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}



export default function Slider({
  index,
  children:current,
  prev,
  next,
  setIndex,
} : SliderProps ){

  const hasPrev = !!prev;
  const hasNext = !!next;
  const zindex = useSharedValue(0);
  const activeSide = useSharedValue(Side.NONE);
  const isTransitionLeft = useSharedValue(false);
  const isTransitionRight = useSharedValue(false);
  const left = useVector(MIN_Ledge, HEIGHT / 2);

  return (
    <View>
      <Text>slider</Text>
    </View>
  )
}

const styles = StyleSheet.create({})