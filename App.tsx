import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Container, Button, Text } from 'native-base'
import { StackNavigator, NavigationScreenProps } from 'react-navigation'
import ITodo from './src/interfaces/ITodo';
import TodoList from './src/TodoList';
import Dummy from './src/Dummy';

interface State {
  todos: ITodo[]
}

const defaultProps = [
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

class Main extends React.Component<NavigationScreenProps<ITodo[]>, State> {
  constructor(props: NavigationScreenProps<ITodo[]>) {
    super(props);
    this.state = {
      todos: defaultProps
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Button onPress={ () => { this.props.navigation.navigate('TodoList', this.state.todos) }}>
            <Text>一覧を表示</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}

const RootStack = StackNavigator(
  {
    Main: {
      screen: Main,
    },
    Dummy: {
      screen: Dummy,
    },
    TodoList: {
      screen: TodoList
    }
  },
  {
    initialRouteName: 'Main',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
