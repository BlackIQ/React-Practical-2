import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a href="." className="navbar-brand text-secondary">React Todo App</a>
                    <div className="d-flex align-items-center">
                        <a className="text-reset me-3" href="#"><i className=""><FontAwesomeIcon icon={faBars} /></i></a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;