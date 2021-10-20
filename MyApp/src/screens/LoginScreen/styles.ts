import {StyleSheet} from 'react-native';

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
//export const Container = styled.View``;
export const styles = StyleSheet.create({
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
