import React, { Component } from "react";

class Navbar extends Component {
    state = {};

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a href="" className="navbar-brand text-secondary">React Todo App</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;