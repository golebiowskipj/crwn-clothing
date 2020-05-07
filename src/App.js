import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/shop">
                    <ShopPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
