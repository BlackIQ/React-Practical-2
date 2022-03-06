import React from "react";
import {FaPlus} from "react-icons/fa";

class Inputs extends React.Component {
    render() {
        return (
            <div className="dropstart">
                <span className="text-primary me-3" data-mdb-toggle="dropdown" aria-expanded="false">
                    <FaPlus />
                </span>
                <div className="dropdown-menu m-2">
                    <form className="px-4 py-3">
                        <p className="text-primary"><b>Add mew TODO</b></p>
                        <input placeholder="Todo name" className="form-control" />
                        <br />
                        <textarea placeholder="Todo caption" className="form-control" />
                        <br />
                        <button type="submit" className="btn btn-primary btn-block">Add todo</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Inputs;