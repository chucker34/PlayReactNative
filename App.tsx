import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Header, Container, Body, Title } from 'native-base'
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
      <Container>
        <Header>
          <Body>
            <Title>TODOリスト</Title>
          </Body>
        </Header>
          <View style={styles.container}>
            <TodoList todos={this.state.todos} />
          </View>
      </Container>
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
