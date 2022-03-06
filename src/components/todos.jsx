import React, {Component} from "react";
import Todo from "./todo";
import todo from "./todo";

class Todos extends Component {
    state = {
        todos: [
            {id: 1, name: 'Go', caption: 'Say hi', status: 'not'},
            {id: 1, name: 'Come', caption: 'Say bye', status: 'done'},
            {id: 1, name: 'Here', caption: 'Eat', status: 'trash'},
        ]
    };

    render() {
        return (
            <React.Fragment>
                {
                    this.state.todos.map(
                        todo => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                onDelete={this.deleteTodo}
                                onDone={this.doneTodo}
                                onNotDone={this.notDoneTodo}
                            />
                        )
                    )
                }
            </React.Fragment>
        )
    }

    doneTodo = todo =>  {
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        todos[index].status = 'done';
        this.setState({todos});
    }

    notDoneTodo = todo =>  {
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        todos[index].status = 'not';
        this.setState({todos});
    }

    deleteTodo = todo => {
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        todos[index].status = 'trash';
        this.setState({todos});
    }
}

export default Todos;