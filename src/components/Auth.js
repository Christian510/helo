
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
            <div className="App">
                <div className="flex-center">
                    <div className="login">
                            <div>
                                <img src={ HeloLogo } alt="Helo-Logo"></img>
                            </div>
                            <div>
                                <h1 id="title-font">Helo</h1>
                            </div>
                            <div className="input-field">
                                <label>Username</label>
                                <input 
                                type={ "text" } 
                                value={ this.state.username }
                                onChange={(e) => { this.handleChange( e.target.value) } } />
                            </div>  
                            <div className="input-field">
                                <label>Password</label>
                                <input type={"text"} value={ this.state.password } onChange={ (e) => { this.handlePassword( e.target.value ) } } />
                            </div>   
                            <div className="button">
                                <button id="login-bt" onClick={ this.handleLogin }>Login</button>
                                <button id="register-bt" >Register</button>
                            </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Auth;