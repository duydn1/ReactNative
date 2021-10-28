import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';

export const LoginScreen = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorUserName, setErrorUserName] = useState<string>();
  const [errorPassword, setErrorPassword] = useState<string>();

  useEffect(() => {
    Alert.alert('Chao mung ban da den voi Yolo system');
  }, []);

  const loginOnClick = useCallback(() => {
    console.log('Login onClick');
    Alert.alert(
      `Xin chao ban ${userName} da dang nhap thanh cong vao Yolo system`,
    );
  }, [userName]);

  const loginFBOnClick = useCallback(() => {
    console.log('Login FB onClick');
  }, []);

  const loginGGOnClick = useCallback(() => {
    console.log('Login GG onClick');
  }, []);

  useEffect(() => {
    console.log('Username is: ', userName);
    if (userName.length > 0) {
      setErrorUserName(undefined);
    }
  }, [userName]);

  useEffect(() => {
    console.log('password is: ', password);
    if (password.length > 0) {
      setErrorPassword(undefined);
    }
  }, [password]);

  const validateUserName = useCallback(() => {
    if (userName.length === 0) {
      setErrorUserName('Ban phai nhap tai khoan');
    } else {
      setErrorUserName(undefined);
    }
  }, [userName]);

  const validatePassword = useCallback(() => {
    if (password.length === 0) {
      setErrorPassword('Ban phai nhap mat khau');
    } else {
      setErrorPassword(undefined);
    }
  }, [password]);

  const isValidLogin = userName.length !== 0 && password.length !== 0;

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.highlight}>Yolo System</Text>
          <MyTextInput
            placeholder="Tên đăng nhập"
            defaultValue={userName}
            onChangeText={(text: string) => {
              console.log('onChangeText', text);
              setUserName(text);
            }}
            errorText={errorUserName}
            onBlur={() => {
              console.log('onUnFocus');
              // nguoi dung thoat khoi o text username
              validateUserName();
            }}
          />
          <MyTextInput
            placeholder="Mật khẩu"
            defaultValue={password}
            onChangeText={setPassword}
            errorText={errorPassword}
            onBlur={validatePassword}
          />
          <MyButton
            onPress={(event: GestureResponderEvent) => {
              console.log(event);
              loginOnClick();
            }}
            disabled={!isValidLogin}
            buttonText="Hello"
            buttonStyle={[
              styles.myButton,
              isValidLogin ? styles.loginButton : styles.disableButton,
            ]}
          />
          <Text style={styles.highlight}>Or</Text>
          <MyButton
            onPress={loginFBOnClick}
            buttonText="Facebook"
            buttonStyle={[styles.myButton, styles.loginFBButton]}
          />
          <MyButton
            onPress={loginGGOnClick}
            buttonText="Google"
            buttonStyle={[styles.myButton, styles.loginGGButton]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
    fontSize: 48,
    color: 'green',
  },
  myButton: {
    backgroundColor: 'green',
  },
  loginButton: {
    backgroundColor: 'purple',
  },
  loginFBButton: {
    backgroundColor: 'blue',
  },
  loginGGButton: {
    backgroundColor: 'red',
  },
  demoContainer: {
    height: 300,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    opacity: 0.3,
  },
  child: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  disableButton: {
    backgroundColor: 'gray',
  },
});

export default LoginScreen;
