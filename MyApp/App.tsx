import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.logoText}>Yolo System</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.inputUsername}
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Nhập tên đăng nhập"
            placeholderTextColor="#929292"
          />
          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#929292"
          />
          <TouchableOpacity 
            style={[styles.buttonShape, {backgroundColor: 'pink'}]}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.logoText}>Or</Text>
          <TouchableOpacity 
            style={[styles.buttonShape, {backgroundColor: 'blue'}]}>
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonShape, {backgroundColor: 'red'}]}>
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const TEXT = {
  color: 'black',
  textAlign: 'center',
  fontSize: 20,
};
const INPUT = {
  height: 60,
  borderRadius: 30,
  paddingHorizontal: 30,
  borderColor: 'black',
  borderWidth: 2,
  fontSize: 20,
  color: '#929292',
  backgroundColor: '#fff',
  textAlign: 'center',
  textAlignVertical: 'center',
  marginTop: 15,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,
  },
  logoText: {
    textAlign: 'center',
    color: 'green',
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
    marginTop: 15,
  },
  form: {
    marginBottom: 30,
  },
  inputUsername: {
    ...INPUT,
  },
  inputPassword: {
    ...INPUT,
  },
  buttonShape: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8d015a',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonText: {
    ...TEXT,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
