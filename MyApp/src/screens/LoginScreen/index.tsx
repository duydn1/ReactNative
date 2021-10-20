import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles} from './styles';
interface LoginScreenProps {
  children: ReactNode;
}

function LoginScreen({children}: LoginScreenProps) {
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
}

export default LoginScreen;
