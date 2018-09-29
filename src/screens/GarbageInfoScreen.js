import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import FadeInView from '../components/FadeInView';

export default class GarbageInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: 'わかりません。', comment: '' };
  }

  componentWillMount() {
    const barcodeNumber = 4903041002520;
    this.returnRandomComment()
    if (barcodeNumber === 4903041002520) {
      this.setState({ item: 'タラタラしてんじゃねーよ' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.garbageTitle}>あなたのゴミの名は</Text>
        <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
          <Text style={styles.garbageContent}>
            { this.state.item }
          </Text>
          <Text>
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
      "三葉「瀧くん、あの、ゴミ... 憶えて、ない？」",
      "瀧「大丈夫、憶えてる。ゴミ、ゴミ、ゴミ。名前は...」",
      "三葉「あのゴミの名前が、思い出せんの」",
    ];
    var randomComment = commentArray[Math.floor(Math.random() * commentArray.length)];

    this.setState({comment:randomComment});
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

