import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Login';
import { Login } from './component/Login';
import { PlazApp } from './component/PlazApp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

var logged = false;
var user = {name:"admin",pass:123};

class App extends Component {
		
	LoginView = () => (
		<Login handleLogin = {this.handleSubmit}
				handleEmailChange = {this.handleEmailChange}
				handlePasswordChange = {this.handlePasswordChange}
		/>
	);
	
	PlazAppView = () => (
		<PlazApp/>
	);
	
	render() {
		if (!logged){
			return (
				<Router>
					<Route exact path="/" component={this.PlazAppView} />
				</Router>
			);
		}else{
			return (
				<Router>
					<Route exact path="/" component={this.PlazaApp} />
				</Router>
			);
		}
	}
	
	handleSubmit = event => {
        if (this.state.email === user.name && this.state.password === user.pass) {
            logged = true;
        }
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

export default App;
