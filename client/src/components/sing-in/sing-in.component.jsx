import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });

    const resetForm = () => {
        setUserCredentials({ email: "", password: "" });
    };

    const handleSubmit = async (e) => {
        const { email, password } = userCredentials;
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.resetForm();
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={userCredentials.email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={userCredentials.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <div className="button">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                        type="button">
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
