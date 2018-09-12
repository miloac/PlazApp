import React from 'react';
import './Login.css';
import './styles.css';
import Button from '@material-ui/core/Button';

export class Login extends React.Component{ 

    render() {
        return (
			<div>
				<div className="s">
					<h1>Bienvenido</h1>
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
					<Button 
						className="loginButton" 
						type="Button" 
						onClick={this.props.handleLogin}
						>
						Iniciar Sesion
					</Button>
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