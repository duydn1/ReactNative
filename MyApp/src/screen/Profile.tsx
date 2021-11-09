import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle, Line, Path, Rect, SvgXml} from 'react-native-svg';
import Lbs from './LBS';
import SVGRecIcon from './REC/svgRecIcon';

const markerRendering = `<svg xmlns="http://www.w3.org/2000/svg"
     width="275" height="200" viewBox="0 0 100 30">
  <defs>
    <marker id="m1" viewBox="0 0 10 10" refX="5" refY="5"
     markerWidth="8" markerHeight="8">
      <circle cx="5" cy="5" r="5" fill="green"/>
    </marker>
    <marker id="m2" viewBox="0 0 10 10" refX="5" refY="5"
     markerWidth="6.5" markerHeight="6.5">
      <circle cx="5" cy="5" r="5" fill="skyblue" opacity="0.9"/>
    </marker>
    <marker id="m3" viewBox="0 0 10 10" refX="5" refY="5"
     markerWidth="5" markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="maroon" opacity="0.85"/>
    </marker>
  </defs>

  <path d="M10,10 h10 v10 z m20,0 h10 v10 z m20,0 h10 v10 z"
  fill="none" stroke="black"
  marker-start="url(#m1)"
  marker-mid="url(#m2)"
  marker-end="url(#m3)"
  />
</svg>`;

function ProfileScreen() {
  return (
    <Svg width="125" height="168" viewBox="0 0 125 168" fill="none" >
      <Line y1="3.5" x2="125" y2="3.5" stroke="blue" stroke-width="5"/>
      <Path d="M60.6006 141.988L48.5473 166.931L77.4144 167.069L65.6005 142.012L60.6006 141.988ZM61.2755 0.988032L60.5886 144.488L65.5885 144.512L66.2755 1.01197L61.2755 0.988032Z" fill="black"/>
      <Rect x="3.78865" width="42.6117" height="42.6117" transform="matrix(0.757731 -0.652567 0.757731 0.652567 27.7036 73.8627)" fill="blue" stroke="black" stroke-width="5"/>
    </Svg>
            
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
// import React, {useEffect, useState} from 'react';
// import {useNavigation, useRoute} from '@react-navigation/core';
// // import * as React from 'react';
// import {
//   View,
//   Text,
//   Button,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';
// import {AuthContext} from '../context/AuthContext';
// import {
//   MainScreenProps,
//   RootScreenNavigationProp,
//   RootScreenRouteProp,
// } from '../stack/Navigation';
// // import {SVGRecIcon} from './REC/svgRecIcon';

// export function ProfileScreen({navigation, route}: MainScreenProps<'Profile'>) {
//   const authContext = React.useContext(AuthContext);
//   const navigation1 = useNavigation<RootScreenNavigationProp<'Profile'>>();
//   const route1 = useRoute<RootScreenRouteProp<'Profile'>>();
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={{flex: 1, padding: 24}}>
//         {isLoading ? (
//           <ActivityIndicator />
//         ) : (
//           <FlatList
//             data={data}
//             keyExtractor={({id}, index) => id}
//             renderItem={({item}) => (
//               <Text>
//                 {item.title}, {item.releaseYear}
//               </Text>
//             )}
//           />
//         )}
//       </View>

//        {/* <SVGRecIcon
//         height="96px"
//         width="96px"
//         color="blue"
//         style={{ opacity: 0.5 }}
//       /> */}
//       <Text>Tên đăng nhập - {authContext.userName}</Text>
//       <Text>Details Screen way 2 - {route1.params?.userId}</Text>
//       <Button
//         title="Go back HomeScreen"
//         onPress={() => navigation.navigate('Home', {userId: '102'})}
//       />
//       <Button
//         title="Go back HomeScreen way 2"
//         onPress={() => navigation1.navigate('Home', {userId: '102'})}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default ProfileScreen;