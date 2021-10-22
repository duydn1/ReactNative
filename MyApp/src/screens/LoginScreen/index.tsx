import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MyButton from '../../component/myButton';
import MyInputText from '../../component/myInputText';

export const LoginScreen = () => {
  // const [userName, setUserName] = useState<string>();
  // const [passWord, setPassWord] = useState<string>();
  // const [errorUserName, setErrorUserName] = useState<string>();
  // const [errorPassWord, setErrorPassWord] = useState<string>();

  // const refPassword = useRef<TextInput>(null);

  // useEffect(() => {
  //   Alert.alert('Info', 'Xin chao ban den voi Yolo system');
  // }, []);

  // const isValidField = useCallback((value?: string) => {
  //   return !!value && value.length > 0;
  // }, []);

  // useEffect(() => {
  //   if (isValidField(userName)) {
  //     setErrorUserName(undefined);
  //   }
  // }, [userName, isValidField]);

  // useEffect(() => {
  //   if (isValidField(passWord)) {
  //     setErrorPassWord(undefined);
  //   }
  // }, [passWord, isValidField]);

  // const validateUser = useCallback(() => {
  //   console.log('validateUser', userName);
  //   if (isValidField(userName)) {
  //     setErrorUserName(undefined);
  //     return true;
  //   } else {
  //     setErrorUserName('Ban phai nhap user name');
  //     return false;
  //   }
  // }, [isValidField, userName]);

  // const validatePassword = useCallback(() => {
  //   if (isValidField(passWord)) {
  //     setErrorPassWord(undefined);
  //     return true;
  //   } else {
  //     setErrorPassWord('Ban phai nhap mat khau');
  //     return false;
  //   }
  // }, [isValidField, passWord]);

  // const validateLogin = useCallback(() => {
  //   const isValidUser = validateUser();
  //   const isValidPassword = validatePassword();
  //   if (isValidUser && isValidPassword) {
  //     Alert.alert(
  //       'Success',
  //       'Xin chao ' + userName + ' ban da dang nhap thanh cong vao he thong',
  //     );
  //   }
  // }, [userName, validatePassword, validateUser]);

  // const isValidLogin = useMemo(() => {
  //   return isValidField(userName) && isValidField(passWord);
  // }, [isValidField, passWord, userName]);

  // const loginButtonStyle = useMemo(
  //   () =>
  //     isValidLogin
  //       ? styles.button
  //       : {...styles.button, backgroundColor: 'gray'},
  //   [isValidLogin],
  // );

  // const focusPassword = useCallback(() => {
  //   refPassword?.current?.focus();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.loginTitle}>Login to Yolo System</Text>
        <MyInputText
        // error={errorUserName}
        // value={userName}
        // onChangeText={setUserName}
        //style={styles.textInput}
        // returnKeyType="next"
        // onBlur={validateUser}
        // onSubmitEditing={focusPassword}
        // clearButtonMode="while-editing"
        />
        <MyInputText
        // error={errorPassWord}
        // value={passWord}
        // onChangeText={setPassWord}
        // secureTextEntry
        // style={styles.textInput}
        // onBlur={validatePassword}
        // ref={refPassword}
        // clearButtonMode="while-editing"
        // onSubmitEditing={validateLogin}
        />
        <MyButton
          style={styles.button}
          // disabled={!isValidLogin}
          // style={loginButtonStyle}
          // onPress={validateLogin}
          buttonText="Login"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  loginTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
    fontWeight: '800',
    marginVertical: 50,
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    padding: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'purple',
  },
});

export default LoginScreen;
