import React from "react";
import Todo from "./todo";

class Todos extends React.Component {
    state = {
        todos: [
            {id: 1, name: 'Call', caption: 'Call Majid', status: 'not'},
            {id: 2, name: 'TODO', caption: 'Work on TODO App', status: 'done'},
            {id: 3, name: 'React', caption: 'Download React course', status: 'trash'},
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