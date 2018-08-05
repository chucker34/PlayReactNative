import * as React from 'react';
import { View, Container, Text } from 'native-base'
import { NavigationScreenProps } from 'react-navigation'
import Todo from './Todo';
import ITodo from './interfaces/ITodo';

interface Props {
  todos: ITodo[]
}

export default class TodoList extends React.Component<NavigationScreenProps<Props>, {}> {
  render() {
    const params = this.props.navigation.state.params
    console.log(params)
    if (params) {
      let todos = (params as ITodo[]).map((todo: ITodo) => {
        return (
          <Todo
            key={todo.id}
            {...todo}
          />
        );
      });

      return(
        <Container>
          {todos}
        </Container>
      );
    } else {
      return(
        <View><Text>リストがありません</Text></View>
      )
    }
  }
}
