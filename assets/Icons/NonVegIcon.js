import React from 'react'
import { View } from 'react-native'
import Svg, { 
  Circle, Ellipse, G, Text, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask 
} from 'react-native-svg'

const NonVegIcon = (props) => (
  <View {...props}>
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white"/>
    <Path d="M7.56699 4.75C7.75944 4.41667 8.24056 4.41667 8.43301 4.75L11.8971 10.75C12.0896 11.0833 11.849 11.5 11.4641 11.5H4.5359C4.151 11.5 3.91044 11.0833 4.10289 10.75L7.56699 4.75Z" fill="#F44D36"/>
    <Rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#F44D36"/>
    </Svg>
  </View>
)

export default NonVegIcon