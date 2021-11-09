import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import ProfileScreen from '../screen/Profile';
import {HomeScreen} from '../screen/Home';
import Rec from '../screen/REC';
import LoginScreen from '../screen/Login';
import MovieDetailScreen from '../screen/MovieDetail';
import MoviePopularScreen from '../screen/MoviePopular';
import MovieTopRatedScreen from '../screen/MovieTopRated';
import {AuthStackParamList, RootStackParamList} from './Navigation';

const Drawer = createDrawerNavigator();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const AppStack = () => {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authContext.isAuth ? (
        //RootStackFC()
        DrawerStackFC()
      ) : (
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppStack;
function RootStackFC(): React.ReactNode {
  return <RootStack.Navigator initialRouteName="Home">
    <RootStack.Screen name="Home" component={HomeScreen} />
    {/* <RootStack.Screen name="Details" component={DetailsScreen} /> */}
    <RootStack.Screen name="MovieDetail" component={MovieDetailScreen} />
    <RootStack.Screen
      name="MoviePopular"
      component={MoviePopularScreen} />
    <RootStack.Screen
      name="MovieTopRated"
      component={MovieTopRatedScreen} />
  </RootStack.Navigator>;
}

function DrawerStackFC(): React.ReactNode {
  return <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Rec" component={Rec} />
    

    {/* <Drawer.Screen name="MovieDetail" component={MovieDetailScreen} />
        <Drawer.Screen name="MoviePopular" component={MoviePopularScreen} />
        <Drawer.Screen name="MovieTopRated" component={MovieTopRatedScreen} /> */}
  </Drawer.Navigator>;
}

