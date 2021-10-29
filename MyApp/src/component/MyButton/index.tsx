import React from 'react';

import {
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type MyButtonProps = TouchableOpacityProps & {
  buttonText?: String;
  buttonStyle?: ViewStyle | ViewStyle[];
};

function MyButton({
  buttonText = 'Button',
  buttonStyle,
  ...otherProps
}: MyButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} {...otherProps}>
      <Text style={styles.title}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
  },
});

export default MyButton;
