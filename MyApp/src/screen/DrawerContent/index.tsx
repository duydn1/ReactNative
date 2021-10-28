import React from 'react';

import {Text, View} from 'react-native';

function DrawerContent() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Drawer content</Text>
    </View>
  );
}

export default DrawerContent;
