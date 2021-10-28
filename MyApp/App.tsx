import React from 'react';
// import {SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './src/screen/DrawerContent';
import HomeScreen from './src/screen/HomeScreen';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    // <SafeAreaView>
    //   <LoginScreen />
    // </SafeAreaView>
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
export default App;
