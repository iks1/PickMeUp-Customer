import React from 'react'
import { View } from 'react-native'
import Svg, { 
  Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask 
} from 'react-native-svg'

const LeftArrowIcon = (props) => (
  <View {...props}>
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M31 24H17" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M24 31L17 24L24 17" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>

  </View>
)

export default LeftArrowIcon