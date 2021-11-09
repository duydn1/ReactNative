import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Svg, {Line, Path, Rect} from 'react-native-svg';

// interface LbsProps {
//   height?: String | undefined;
//   width?: String;
//   colorLBS: String;
// }

//function Lbs({height = '170px', width = '100px', colorLBS = 'blue'}: LbsProps) {
//function Lbs() extends React.Component {
function Lbs() {
  return (
    <Svg width="125" height="168" viewBox="200 220 325 368" fill="none">
      <Line y1="3.5" x2="125" y2="3.5" stroke="blue" stroke-width="5" />
      <Path
        d="M60.6006 141.988L48.5473 166.931L77.4144 167.069L65.6005 142.012L60.6006 141.988ZM61.2755 0.988032L60.5886 144.488L65.5885 144.512L66.2755 1.01197L61.2755 0.988032Z"
        fill="black"
      />
      <Rect
        x="3.78865"
        width="42.6117"
        height="42.6117"
        transform="matrix(0.757731 -0.652567 0.757731 0.652567 27.7036 73.8627)"
        fill="blue"
        stroke="black"
        stroke-width="5"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});
export default  Lbs;

