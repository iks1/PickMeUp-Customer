import React from 'react'
import { View } from 'react-native'
import Svg, { 
  Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask 
} from 'react-native-svg'

const UpArrowIcon = (props) => (
  <View {...props}>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M6 15L12 9L18 15" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>

  </View>
)

export default UpArrowIcon