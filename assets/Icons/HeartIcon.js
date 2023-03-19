import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

const HeartIcon = (props) => {
  const Favourite = props.isFavourite;
  const [isFavourite, setIsFavourite] = useState(isFavourite)
  //   const [isFavourite, setIsFavourite] = useEffect(props.isFavourite);
  const strokeColor = isFavourite ? "white" : "#FA3440";
  const fillColor = !isFavourite ? "white" : "#FA3440";
  const onToggle = () => {
    setIsFavourite(!isFavourite)
  }
  return (
    <View {...props}>
      <Svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect width="48" height="48" rx="24" fill={fillColor} />
        <G clip-path="url(#clip0_260_1647)">
          <Path
            d="M29.8933 19.0733C29.5528 18.7327 29.1485 18.4624 28.7036 18.2781C28.2586 18.0937 27.7817 17.9988 27.3 17.9988C26.8183 17.9988 26.3414 18.0937 25.8964 18.2781C25.4515 18.4624 25.0472 18.7327 24.7067 19.0733L24 19.78L23.2933 19.0733C22.6055 18.3855 21.6727 17.9991 20.7 17.9991C19.7273 17.9991 18.7945 18.3855 18.1067 19.0733C17.4189 19.7611 17.0325 20.694 17.0325 21.6667C17.0325 22.6394 17.4189 23.5722 18.1067 24.26L18.8133 24.9667L24 30.1533L29.1867 24.9667L29.8933 24.26C30.234 23.9195 30.5042 23.5152 30.6886 23.0702C30.873 22.6253 30.9679 22.1483 30.9679 21.6667C30.9679 21.185 30.873 20.7081 30.6886 20.2631C30.5042 19.8181 30.234 19.4138 29.8933 19.0733Z"
            stroke={strokeColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_260_1647">
            <Rect
              width="16"
              height="16"
              fill={fillColor}
              transform="translate(16 16)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};
export default HeartIcon;
