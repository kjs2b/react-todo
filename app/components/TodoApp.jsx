import React, {Component} from 'react';
import TodoList from 'TodoList';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Clean the kitchen'
        }, {
          id: 4,
          text: 'Take out the trash'
        }
      ]
    };
  }

  render() {
    var { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
};
