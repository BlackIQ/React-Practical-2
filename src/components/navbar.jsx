import React from "react";
import {FaGithub, FaGlobeAmericas} from "react-icons/fa";

class Navbar extends React.Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a href="." className="navbar-brand text-secondary">React Todo App</a>
                    <div className="d-flex align-items-center">
                        <a className="text-reset me-3" href="https://amirhossein.info"><i className=""><FaGlobeAmericas /></i></a>
                        <a className="text-reset me-3" href="https://github.com/BlackIQ/React-Practical-2"><i className=""><FaGithub /></i></a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;