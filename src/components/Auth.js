
import  React, { Component } from 'react';
import HeloLogo from '../assets/helo_logo.png';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange( login ) {
        this.setState( {
            username: login
        }, () => { console.log( login ) } );
    }

    handlePassword( pw ) {
        this.setState( { 
            password: pw
         }, () => { console.log( pw ) } );
    }
        handleLogin( ) {

            console.log( this.state );

        }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="login">
                        <div>
                            <img src={ HeloLogo } alt="Helo-Logo"></img>
                        </div>
                        <div>
                            <p>Helo</p>
                        </div>
                        <div>
                            <label> Username
                                <input 
                                type={ "text" } 
                                value={ this.state.username }
                                onChange={(e) => { this.handleChange( e.target.value) } } />
                            </label>
                            <label> Password
                                <input type={"text"} value={ this.state.password } onChange={ (e) => { this.handlePassword( e.target.value ) } } />
                            </label>
                        </div>
                        <div>
                            <button onClick={ this.handleLogin } >Login</button>
                            <button>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;