import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Login extends Component {
	constructor(props) {
		super(props);
		this.props.logout();
		this.state = {
			email: '',
			password: '',
			submitted: false
		};
	}

	handleInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	submitLogin(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { email, password } = this.state;
		if (email && password) {
			this.props.login(email, password);
		}
	}
	email(submitted, email) {
		return (
			<div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
				<label htmlFor="email">Email/ User Name:</label>
				<input type="text" id="email" className="form-control input-shadow" placeholder="Enter Email or User Name" value={this.state.email} onChange={(e) => { this.handleInputChange(e); }} name="email" />
				{submitted && !email && <div className="error-message">Email is required</div>}
			</div>
		)
	}
	password(submitted, password) {
		return (
			<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
				<label>Password: </label>
				<input type="password" id="exampleInputPassword" className="form-control input-shadow" placeholder="Enter Password" value={this.state.password} onChange={(e) => { this.handleInputChange(e); }} name="password" />
				{submitted && !password && <div className="error-message">Password is required</div>}
			</div>
		)
	}
	submit() {
		return (
			<div>
				<button type="button" onClick={(e) => { this.submitLogin(e); }} className="btn btn-primary btn-block">Sign In</button>
				<Link to="/register" className="btn btn-link">Register</Link>
			</div>
		)
	}

	render() {
		// const { loggingIn } = this.props;
		const { email, password, submitted } = this.state;
		return (
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4 col-md-offset-4">
					<h2 className="text-center">User Login</h2>
					<form name="form">
						{this.email(submitted, email)}
						{this.password(submitted, password)}
						{this.submit()}
					</form>
				</div>
				<div className="col-md-4"></div>
			</div>
		)
	}
}
function mapState(state) {
	const { loggingIn } = state.authentication;
	return { loggingIn };
}

const actionCreators = {
	login: userActions.login,
	logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };
