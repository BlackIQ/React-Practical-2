import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTrash, faClock, faCaretDown} from "@fortawesome/free-solid-svg-icons";

class Todo extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className={this.classes()}>
                    <span className={this.colorClass()}>
                        {this.props.todo.name}
                        <br />
                        <small>{this.props.todo.caption}</small>
                    </span>
                    <div className="actions">
                        <div className="dropdown">
                            <span className="text-dark pointer" id="dropmenu" data-mdb-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faCaretDown} />
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="dropmenu">
                                <li>
                                    <button onClick={() => this.props.onDone(this.props.todo)} className="dropdown-item text-success" type="button" disabled={this.props.todo.status === 'done' ? true : null}>
                                        Done
                                        <span className="float-end"><FontAwesomeIcon icon={faCheck} /></span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => this.props.onNotDone(this.props.todo)} className="dropdown-item text-primary" type="button" disabled={this.props.todo.status === 'not' ? true : null}>
                                        Not Done
                                        <span className="float-end"><FontAwesomeIcon icon={faClock} /></span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => this.props.onDelete(this.props.todo)} className="dropdown-item text-danger" type="button" disabled={this.props.todo.status === 'trash' ? true : null}>
                                        Delete
                                        <span className="float-end"><FontAwesomeIcon icon={faTrash} /></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    actionClass() {
        let c = 'text-';
        if (this.props.todo.status === 'not') c += 'primary';
        else if (this.props.todo.status === 'done') c += 'success';
        else if (this.props.todo.status === 'trash') c += 'danger';
        return c;
    }

    colorClass() {
        let c = 'text-';
        if (this.props.todo.status === 'not') c += 'primary';
        else if (this.props.todo.status === 'done') c += 'success';
        else if (this.props.todo.status === 'trash') c += 'danger';
        return c;
    }

    classes() {
        let c = 'todo m-1 rounded-4 border border-';
        if (this.props.todo.status === 'not') c += 'primary';
        else if (this.props.todo.status === 'done') c += 'success';
        else if (this.props.todo.status === 'trash') c += 'danger';
        return c;
    }
}

export default Todo;