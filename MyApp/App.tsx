/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {AuthContextProvider} from './src/context/AuthContext';
import AppStack from './src/stack/AppStack';

function App() {
  return (
    <AuthContextProvider>
      <AppStack />
    </AuthContextProvider>
  );
}
export default App;
