import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
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
        <View style={styles.button}>
        <Image
          source={require('../img/20170630.png')}
        />
          <Button
            title="ゴミの名を調べる"
            color="white"
            // style={styles.button}
            onPress={() => navigate('Camera')}>
          </Button>
        </View>
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
  button: {
    backgroundColor: '#668ad8',
    padding: 20,
    borderRadius: 10,
  }
 })