
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import ITodo from './interfaces/ITodo';

export default class Todo extends React.Component<ITodo, {}> {
  render() {
    const link = this.props.status ? '元に戻す' : '完了！'
    return(
      <View>
        <Text>{this.props.id}：{this.props.title}</Text>
        <Button
          onPress={() => { console.log('ボタン押したよ')}}
          title={link}
        />
        <Text>{this.props.desc}</Text>
      </View>
    );
  }
}

