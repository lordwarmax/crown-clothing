import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/from-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user.reducer/user.actions';
import {SignUpContainer, TitleContainer} from './sign-up.styles';

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }); 
    
    const { displayName, email, password, confirmPassword } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();
        
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        };

        signUpStart({ displayName, email, password });
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };
    return(
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form className="sign-up-from" onSubmit={handleSubmit}>
                <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required
                />
                <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
                />
                <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
                />
                <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
};

const mapDispathToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispathToProps)(SignUp);