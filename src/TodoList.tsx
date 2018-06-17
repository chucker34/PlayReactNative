import * as React from 'react';
import { StyleSheet, Text, View, FlatList, ListView} from 'react-native';
import Todo from './Todo';
import ITodo from './interfaces/ITodo';

interface Props {
  todos: ITodo[]
}

export default class TodoList extends React.Component<Props, {}> {
  render() {
    const todos = this.props.todos.map((todo: ITodo) => {
      return (
        <Todo
          key={todo.id}
          {...todo}
        />
      );
    });

    return(
      <View>
        {todos}
      </View>
    );
  }
}
