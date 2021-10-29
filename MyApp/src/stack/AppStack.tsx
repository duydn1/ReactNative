import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {DetailsScreen} from '../screen/Details';
import {HomeScreen} from '../screen/Home';
import LoginScreen from '../screen/Login';
import {AuthStackParamList, RootStackParamList} from './Navigation';

const Drawer = createDrawerNavigator();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const AppStack = () => {
  const authContext = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authContext.isAuth ? (
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Details" component={DetailsScreen} />
        </RootStack.Navigator>
        // <Drawer.Navigator initialRouteName="Home">
        //   <Drawer.Screen name="Home" component={HomeScreen} />
        //   <Drawer.Screen name="Details" component={DetailsScreen} />
        // </Drawer.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppStack;
