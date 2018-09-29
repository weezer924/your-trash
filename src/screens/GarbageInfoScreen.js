import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class GarbageInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: 'わかりません。' };
  }

  componentWillMount() {
    const barcodeNumber = 4903041002520;
    if (barcodeNumber === 4903041002520) {
      this.setState({ item: 'タラタラしてんじゃねーよ' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.garbageTitle}>あなたのゴミの名は</Text>
        <Text style={styles.garbageContent}>{ this.state.item }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  garbageTitle: {
    backgroundColor: '#fff',
    paddingBottom: 32,
    fontSize: 16,
  },
  garbageContent: {
    fontSize: 16,
  },
});
