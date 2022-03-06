import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";

class Todo extends Component {
    state = {};

    render() {
        return (
            <div className="col-md-6 todo rounded-4 border border-secondary">
                <div className="m-1">
                    <p>
                        Name
                        <br />
                        <small>Caption</small>
                    </p>
                    <div>
                        <button className="btn btn-outline-success float-start"><FontAwesomeIcon icon={faCheck} /></button>
                        <button className="btn btn-outline-danger float-end"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;