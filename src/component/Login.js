import React from 'react';
import './Login.css';

export class Login extends React.Component{ 

    render() {
        return (
			<div>
				<div className="s">
					<h1>Iniciar Sesion</h1>
					<section>
						<p>Nombre de Uusario:</p>
						<input 
							type="text" 
							onchange={this.props.handleEmailChange}
						/>
					</section>
					<section>
						<p>Contraseña: </p>
						<input 
							type="password" 
							onchange={this.props.handlePasswordChange}
						/>
					</section>
					<button 
						className="loginButton" 
						type="button" 
						onclick={this.props.handleLogin}
						>
						Iniciar Sesion
					</button>
				</div>
				<div className="right">
					<img src={require("../images/principal/logo.png")} className="logo" />
				</div>
			</div>

        );
    }
	
	handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

}