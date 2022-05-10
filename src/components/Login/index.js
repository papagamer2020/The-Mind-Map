import { makeUniqueId } from '@apollo/client/utilities';
import React from 'react';

function LoggedoutUser(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedin) {
        return '/main.html'
    }
    return
}

function ContactForm() {
    const [formState, setFormState] = useState({ password: '', email: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { password, email } = formState;
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };
  
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
    <div class="column is half is-left">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <blockquote>Organize your thoughts and destress immediatly as you layout your thoughts and plans! The mindmap allows you to plan out complex plots, theories, and ideas with ease.</blockquote>
                <div class="login-hr"/>
                    <p class="subtitle has-text-black">Please login to proceed</p>
                    <div class="box">
                        <form onSubmit={userEmail.handleSubmit}>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-rounded" type="email" value={userEmail.state.email} placeholder="Your Email" onChange={userEmail.handleChange}/>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-rounded" type="password" value={userPassword.state.password} placeholder="Your Password"onChange={userPassword.handleChange}/>
                                </div>
                            </div>
                            <button class="button is-block is-black is-fullwidth is-r is-rounded">Login
                            <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
                <p class="has-text-black">
                    <button class="button is-block is-white is-fullwidth is-r is-rounded">Already have an account?</button> &nbsp;·&nbsp;
                </p>
            </div>
        </div>
    )
    };

export default Login;