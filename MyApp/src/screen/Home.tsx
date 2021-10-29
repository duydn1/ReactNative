import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {RootStackParamList} from '../stack/Navigation';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export function HomeScreen({navigation, route}: HomeProps) {
  const authContext = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Home Screen - {authContext.userName}</Text>
      <Text>Home Screen - {authContext.orgCode}</Text>
      <Text>Home Screen - {authContext.tokenCode}</Text>
      <Text>UserId - {route.params?.userId}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {userId: '100'})}
      />
      <Button title="Logout" onPress={() => authContext?.setAuth?.(false)} />
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
