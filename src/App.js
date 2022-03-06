import React from "react";
import './App.css';
import Todo from "./components/todo";
import Navbar from "./components/navbar";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <main className="container body">
                <div className="row">
                    <Todo/>
                    <Todo/>
                    <Todo/>
                    <Todo/>
                    <Todo/>
                    <Todo/>
                </div>
            </main>
        </React.Fragment>
    );
}

export default App;
