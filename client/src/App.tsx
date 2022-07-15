import React from "react";
import "./App.css";
import Routes from "./pages/routes/Routes";

function App() {
    return (
        <div className="App" onContextMenu={(e) => e.preventDefault()}>
            <Routes></Routes>
        </div>
    );
}

export default App;
