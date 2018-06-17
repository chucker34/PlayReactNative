import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './src/TodoList';
import ITodo from './src/interfaces/ITodo';

interface State {
  todos: ITodo[]
}

const defaultProps: ITodo[] = [
  {
    id: 1,
    title: "Hello, React!",
    desc: "React始めました",
    status: false
  },
  {
    id: 2,
    title: "Hello, Redux!",
    desc: "Reduxも始めました",
    status: false
  },
]

export default class App extends React.Component<ITodo[], State> {
  constructor(props: ITodo[]) {
    super(props);
    this.state = {
      todos: defaultProps
    }
  }

  render() {
    return (
        <TodoList todos={this.state.todos} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
