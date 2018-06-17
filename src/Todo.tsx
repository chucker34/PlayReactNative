
import * as React from 'react';
import { Text, View } from 'react-native';
import ITodo from './interfaces/ITodo';

export default class Todo extends React.Component<ITodo, {}> {
  render() {
    const link = this.props.status ? '元に戻す' : '完了！'
    return(
      <View>
        <Text>{this.props.id}</Text>
        <Text>：{this.props.title}　　</Text>
        <Text>{link}</Text>
        <Text>{this.props.desc}</Text>
      </View>
    );
  }
}

