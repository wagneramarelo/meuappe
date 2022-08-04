import React from 'react';
import { Button, View, Text } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { GestureHandlerRootView } from "react-native-gesture-handler";

class AddUserScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to user list"
          onPress={() => this.props.navigation.navigate('UserScreen')}
          color="#19AC52"
        />
      </View>
    );
  }
}
export default AddUserScreen;