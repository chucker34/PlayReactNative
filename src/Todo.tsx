
import * as React from 'react';
import { Text, View, Button } from 'native-base';
import ITodo from './interfaces/ITodo';

interface State {
  status: boolean
}

export default class Todo extends React.Component<ITodo, State> {

  constructor(props: ITodo) {
    super(props)
    this.state = {
      status: this.props.status
    }
  }

  render() {
    const link = this.state.status ? '元に戻す' : '完了！'

    return(
      <View>
        <Text>{this.props.id}：{this.props.title}</Text>
        <Button block onPress={() => { this.toggleButtonTest() }}>
          <Text>{link}</Text>
        </Button>
        <Text>{this.props.desc}</Text>
      </View>
    );
  }

  toggleButtonTest() {
    return this.setState({ status: !this.state.status })
  }
}

