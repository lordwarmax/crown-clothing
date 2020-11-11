import React, { useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/from-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user.reducer/user.actions';

import {SignInContainer, TitleContainer, ButtonsContainer} from './sign-in.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <TitleContainer className="title">I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email"
                    type="email"
                    handleChange={handleChange} 
                    value={email}
                    label="email"
                    required
                />
                <FormInput 
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}    
                    label="password"
                    required
                />
                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
};


const mapDipatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDipatchToProps)(SignIn);