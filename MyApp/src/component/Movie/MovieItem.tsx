import React, {useCallback} from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View, Alert} from 'react-native';
import { Movie } from '../../modal/Movie';

type MovieItemProps = {
  movie: Movie;
  onPress?: (movie: Movie) => void;
};

const MovieItem: React.FC<MovieItemProps> = ({movie, onPress}) => {
  const localClick = useCallback(() => {
    onPress?.(movie);
    //console.log(movie);
    //Alert.alert('Tên film:'+movie.title);
  }, [movie, onPress]);
  return (
    <TouchableOpacity onPress={localClick} style={styles.item}>
      <Image
        style={styles.image}
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
      />
      <View style={styles.rightContent}>
        <Text style={styles.itemText}>{movie.id}</Text>
        <Text numberOfLines={1} ellipsizeMode="middle" style={styles.title}>
          {movie.title}
        </Text>
        <Text numberOfLines={3} style={styles.itemText}>
          {movie.overview}
        </Text>
        <Text style={styles.itemText}>{movie.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MovieItem);

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