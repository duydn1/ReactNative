import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {RootStackParamList} from '../stack/Navigation';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MovieDetailScreen from './MovieDetail';
import MovieTopRatedScreen from './MovieTopRated';
import MoviePopularScreen from './MoviePopular';

const Tab = createMaterialBottomTabNavigator();
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export function HomeScreen({navigation, route}: HomeProps) {
  const authContext = React.useContext(AuthContext);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      //barStyle={{paddingBottom: 48},}
      barStyle={({backgroundColor: '#694fad'})}>
      <Tab.Screen name="Movie Popular" component={MoviePopularScreen} />
      <Tab.Screen name="Movie Top Rated" component={MovieTopRatedScreen} />
      <Tab.Screen name="Movie Detail" component={MovieDetailScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
