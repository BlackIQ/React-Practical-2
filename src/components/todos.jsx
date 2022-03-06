import React, {Component} from "react";
import Todo from "./todo";

class Todos extends Component {
    state = {
        todos: [
            {id: 1, name: 'Go', caption: 'Say hi', status: 'not'},
            {id: 1, name: 'Come', caption: 'Say bye', status: 'done'},
            {id: 1, name: 'Here', caption: 'Eat', status: 'in'},
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
                            />
                        )
                    )
                }
            </React.Fragment>
        )
    }
}

export default Todos;