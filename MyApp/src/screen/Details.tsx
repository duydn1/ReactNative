import {useNavigation, useRoute} from '@react-navigation/core';
import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import {
  MainScreenProps,
  RootScreenNavigationProp,
  RootScreenRouteProp,
} from '../stack/Navigation';

export function DetailsScreen({navigation, route}: MainScreenProps<'Details'>) {
  const authContext = React.useContext(AuthContext);
  const navigation1 = useNavigation<RootScreenNavigationProp<'Details'>>();
  const route1 = useRoute<RootScreenRouteProp<'Details'>>();
  return (
    <View style={styles.container}>

      <Text>Tên đăng nhập - {authContext.userName}</Text>
      <Text>Details Screen way 2 - {route1.params?.userId}</Text>
      <Button
        title="Go back HomeScreen"
        onPress={() => navigation.navigate('Home', {userId: '102'})}
      />
      <Button
        title="Go back HomeScreen way 2"
        onPress={() => navigation1.navigate('Home', {userId: '102'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
