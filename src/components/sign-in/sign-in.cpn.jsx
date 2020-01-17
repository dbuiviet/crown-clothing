import React from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.cpn';
import CustomButton from '../../components/custom-button/custom-button.cpn';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div className='sign-in'>
                <div className='title'>
                    <h2>I already have an account</h2>
                    <span>Sign in with your username and password</span>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='passwod'
                        required />

                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
