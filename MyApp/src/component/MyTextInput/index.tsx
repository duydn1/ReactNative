import React from 'react';

import {
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextInput,
  Text,
} from 'react-native';

type MyTextInputProps = TextInputProps & {
  // ke thua lai toan bo thuoc tinh cua TextInputProps va them thuoc tinh duoi day
  containerTextStyle?: ViewStyle;
  errorText?: string;
};

function MyTextInput({
  containerTextStyle = styles.textInput,
  errorText,
  ...otherProps
}: MyTextInputProps) {
  // ...otherProps lay ra toan bo cac thuoc tinh con lai trong TextInputProps
  return (
    <View style={[styles.container, containerTextStyle]}>
      <TextInput {...otherProps} />
      {!!errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312e38',
  },
  textInput: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 9,
  },
});

export default MyTextInput;
