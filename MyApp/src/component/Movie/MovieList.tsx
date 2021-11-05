import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ListRenderItemInfo,
  RefreshControlProps,
} from 'react-native';
import { Movie } from '../../modal/Movie';
import {MainStackNavigation} from '../../stack/Navigation';
import MovieItem from './MovieItem';

export type Props = {
  loading: boolean;
  data: Movie[];
  refreshControl?: React.ReactElement<
    RefreshControlProps,
    string | React.JSXElementConstructor<any>
  >;
  onEndReached?: () => void;
};

export default function MovieList({
  loading,
  data,
  refreshControl,
  onEndReached,
}: Props) {
  const mainStackNavigation = useNavigation<MainStackNavigation>();
  const onItemClick = useCallback(
    (movie: Movie) => {
      mainStackNavigation.navigate('MovieDetail', movie);
    },
    [mainStackNavigation],
  );

  const keyExtractor = useCallback(
    (item: Movie, index): string => (item?.id ?? 0 + index).toString(),
    [],
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Movie>) => (
      <MovieItem movie={item} onPress={onItemClick} />
    ),
    [onItemClick],
  );

  if (loading) {
    return <ActivityIndicator color="red" size="large" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={onEndReached}
        refreshControl={refreshControl}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});