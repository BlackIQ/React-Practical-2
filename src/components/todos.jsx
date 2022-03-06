import React, {Component} from "react";
import Todo from "./todo";
import todo from "./todo";

class Todos extends Component {
    state = {
        todos: [
            {id: 1, name: 'Go', caption: 'Say hi', status: 'not'},
            {id: 2, name: 'Come', caption: 'Say bye', status: 'done'},
            {id: 3, name: 'Here', caption: 'Eat', status: 'trash'},
            {id: 4, name: 'Here', caption: 'Eat', status: 'trash'},
            {id: 5, name: 'Here', caption: 'Eat', status: 'trash'},
            {id: 6, name: 'Here', caption: 'Eat', status: 'trash'},
            {id: 7, name: 'Here', caption: 'Eat', status: 'trash'},
            {id: 8, name: 'Here', caption: 'Eat', status: 'trash'},
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
        document.getElementById('dropdown-menu').hidden();
    }

    deleteTodo = todo => {
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        todos[index].status = 'trash';
        this.setState({todos});
    }
}

export default Todos;