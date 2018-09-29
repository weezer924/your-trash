import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { Constants } from 'expo';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Button
          title="ゴミの名は？"
          color="#841584"
          style={styles.button}
          onPress={() => navigate('Camera')}>
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
 })