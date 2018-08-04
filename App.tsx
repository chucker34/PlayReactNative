import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Container, Button, Text } from 'native-base'
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux'
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

class Dummy extends React.Component {
  render() {
    return (
      <Container>
        <View>
          <Text>Dummy</Text>
          <Button onPress={Actions.main}>
            <Text>次のページ</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

class Main extends React.Component<ITodo[], State> {
  constructor(props: ITodo[]) {
    super(props);
    this.state = {
      todos: defaultProps
    }
  }

  render() {
    return (
      <Container>
       <View style={styles.container}>
          <View>
            <Button onPress={() => { Actions.reset('dummy')}}>
              <Text>戻る</Text>
            </Button>
          </View>
          <TodoList todos={this.state.todos} />
        </View>
      </Container>
    )
  }
}

export default class App extends React.Component {

  render() {
    return (
     <Router>
        <Scene key="root">
          <Scene key="dummy" initial component={Dummy} title="Dummy" />
          <Scene key="main" component={Main} title="Main" />
        </Scene>
      </Router>
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
