import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "./redux/user/user.actions";

const App = ({ setCurrentUser, currentUser }) => {

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });

        return () => {
            unsubscribeFromAuth();
        };
    }, [setCurrentUser]);

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
                <Route exact path="/checkout">
                    <CheckoutPage />
                </Route>
                <Route exact path="/signin">
                    {currentUser ? (
                        <Redirect to="/" />
                    ) : (
                        <SignInAndSignUpPage />
                    )}
                </Route>
            </Switch>
        </Router>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
