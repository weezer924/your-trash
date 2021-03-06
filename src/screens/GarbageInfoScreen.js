import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import FadeInView from '../components/FadeInView';
import Fire from '../components/Firebase'

export default class GarbageInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: 'わかりません。', comment: '' };
  }

  componentWillMount() {
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const code = navigation.getParam('barcodeValue');
    const resRef1 = await Fire.shared.getCollection(code)
    console.log(resRef1.get('name'));
    this.setState({item: resRef1.get('name') || 'わかりません。'});
    this.returnRandomComment();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wakakoWrap}>
          <Image source={require('../img/mon018.jpg')} style={styles.wakako}></Image>
          <Text style={styles.garbageTitle}>おまんのゴミの名は...</Text>
        </View>

        <FadeInView style={{ width: 250, height: 100, backgroundColor: 'powderblue' }}>
        <Image source={require('../img/mDhqPR8n_400x400.png')}></Image>
        <Text style={styles.garbageContent}>
          {this.state.item}
        </Text>
        <Text style={styles.garbageComment}>
          {this.state.comment}
        </Text>
        </FadeInView>
      </View>
    );
  }

  returnRandomComment() {
    const commentArray = [
      "瀧「見ていたはずのゴミは、いつも思い出せない」",
      "瀧「ーあの日、ゴミが降った日。それはまるで、まるで夢の景色のように　美しい眺めだったー」",
      "瀧「大事なゴミ。忘れたくないゴミ。忘れちゃダメなゴミ。何だ、何だ、何だ？名前は…！」",
      "一葉おばあちゃん「おや、三葉。あんた今、ゴミを見とるな？」",
      "瀧「ずっと何かを、ゴミ箱を、探している」",
      "三葉「あのゴミの名前が、思い出せんの」",
    ];
    var randomComment = commentArray[Math.floor(Math.random() * commentArray.length)];

    this.setState({comment:randomComment});
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  wakakoWrap: {
    flex: 1,
    flexDirection: 'row',
  },
  garbageTitle: {
    backgroundColor: '#fff',
    // paddingBottom: 15,
    fontSize: 35,
    flex: 2,
    flexDirection: 'row',
    height: 200,
  },
  wakako: {
    flex: 1,
    flexDirection: 'row',
  },
  garbageContent: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  garbageComment: {
    fontSize: 20,
  }
});

