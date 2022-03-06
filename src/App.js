import React from "react";
import './App.css';
import Todos from "./components/todos";
import Navbar from "./components/navbar";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <main className="container body">
                <div className="row">
                    <Todos />
                </div>
            </main>
        </React.Fragment>
    );
}

export default App;
