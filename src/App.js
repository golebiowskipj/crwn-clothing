import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/hats">
                    <HatsPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
