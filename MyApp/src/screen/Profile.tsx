import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
// import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {
  MainScreenProps,
  RootScreenNavigationProp,
  RootScreenRouteProp,
} from '../stack/Navigation';

export function ProfileScreen({navigation, route}: MainScreenProps<'Profile'>) {
  const authContext = React.useContext(AuthContext);
  const navigation1 = useNavigation<RootScreenNavigationProp<'Profile'>>();
  const route1 = useRoute<RootScreenRouteProp<'Profile'>>();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
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
