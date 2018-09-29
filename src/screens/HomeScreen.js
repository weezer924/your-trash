import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation'

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment: ""
    }
  }

  componentWillMount() {
    this.returnRandomComment()
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Button
          title="ゴミの名は？"
          color="#841584"
          onPress={() => navigate('Camera')}>
        </Button>
        <Text>
          {this.state.comment}
        </Text>
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

 })