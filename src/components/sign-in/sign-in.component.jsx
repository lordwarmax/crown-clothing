import React from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/from-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user.reducer/user.actions';

import {SignInContainer, TitleContainer, ButtonsContainer} from './sign-in.styles';

class SignIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value});
    };

    render () {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <TitleContainer className="title">I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}    
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
    }
}

const mapDipatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDipatchToProps)(SignIn);