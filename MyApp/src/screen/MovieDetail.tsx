import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieItem from '../component/Movie/MovieItem';
import { MainScreenProps } from '../stack/Navigation';

export default function MovieDetailScreen(
  props: MainScreenProps<'MovieDetail'>,
) {
  return <MovieItem movie={props.route.params} />;
}
const styles = StyleSheet.create({
  item: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
  },
  itemText: {
    fontSize: 14,
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
  },
  rightContent: {
    flex: 1,
    padding: 10,
  },
});