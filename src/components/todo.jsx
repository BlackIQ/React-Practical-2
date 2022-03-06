import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

class Todo extends Component {
    render() {
        return (
            <div className={this.classes()}>
                <div className="m-1">
                    <p>
                        {this.props.todo.name}
                        <br />
                        <small>{this.props.todo.caption}</small>
                    </p>
                    <div>
                        <button className="btn btn-outline-success float-start"><FontAwesomeIcon icon={faCheck} /></button>
                        <button className="btn btn-outline-danger float-end"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            </div>
        )
    }

    buttons() {

    }

    classes() {
        let c = 'col-md-6 todo rounded-4 border border-';
        if (this.props.todo.status === 'not') c += 'danger';
        else if (this.props.todo.status === 'done') c += 'success';
        else c += 'primary';
        return c;
    }
}

export default Todo;