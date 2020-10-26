import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CountryDropdown } from 'react-country-region-selector';

import { userActions } from '../../actions';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			userName: '',
			gender: '',
			country: '',
			submitted: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		let name = e.target.name, value = e.target.value;
		this.setState({
			[name]: value
		});
	}
	selectGender(e) {
		let name = e.target.name, value = e.target.value;
		this.setState({
			[name]: value
		});
	}
	selectCountry(val) {
		this.setState({ country: val });
	}

	submitRegister(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { firstName, lastName, userName, email, password, gender, country } = this.state;
		console.log("firstName: ", firstName)
		if (firstName && lastName && userName && email && password && gender && country) {
			this.props.register({ firstName, lastName, userName, email, password, gender, country });
			this.setState({
				email: '',
				password: '',
				firstName: '',
				lastName: '',
				userName: '',
				gender: 'male',
				country: '',
				submitted: false
			})
		}
	}
	firstName(submitted, firstName) {
		return (
			<div className={'form-group' + (submitted && !firstName ? ' has-error' : '')}>
				<label>First Name:</label>
				<input type="text" id="firstName" className="form-control input-shadow" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleInputChange} name="firstName" />
				{submitted && !firstName && <div className="error-message">First Name is required</div>}
			</div>
		)
	}
	lastName(submitted, lastName) {
		return (
			<div className={'form-group' + (submitted && !lastName ? ' has-error' : '')}>
				<label>Last Name:</label>
				<input type="text" id="lastName" className="form-control input-shadow" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleInputChange} name="lastName" />
				{submitted && !lastName && <div className="error-message">Last Name is required</div>}
			</div>
		)
	}
	userName(submitted, userName) {
		return (
			<div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
				<label>Username:</label>
				<input type="text" id="userName" className="form-control input-shadow" placeholder="Enter user name" value={this.state.userName} onChange={this.handleInputChange} name="userName" />
				{submitted && !userName && <div className="error-message">User Name is required</div>}
			</div>
		)
	}
	email(submitted, email) {
		return (
			<div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
				<label>Email:</label>
				<input type="email" id="email" className="form-control input-shadow" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} name="email" />
				{submitted && !email && <div className="error-message">Email is required</div>}
			</div>
		)
	}
	password(submitted, password) {
		return (
			<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" className="form-control input-shadow" placeholder="Enter Password" value={this.state.password}
					onChange={(e) => { this.handleInputChange(e); }} name="password" />
				{submitted && !password && <div className="error-message">Password is required</div>}
			</div>
		)
	}
	gender(submitted, gender) {
		return (
			<div className={'form-group' + (submitted && !gender ? ' has-error' : '')}>
				<label htmlFor="gender">Gender: </label> <br />
				<div className="form-check-inline">
					<label className="form-check-label" htmlFor="radio1">
						<input type="radio" className="form-check-input" id="male" name="gender" value="male" onChange={(e) => { this.selectGender(e); }} />MALE
								</label>
				</div>
				<div className="form-check-inline">
					<label className="form-check-label" htmlFor="radio2">
						<input type="radio" className="form-check-input" id="female" name="gender" value="female" onChange={(e) => { this.selectGender(e); }} />FEMALE
								</label>
				</div>
				<div className="form-check-inline">
					<label className="form-check-label" htmlFor="radio2">
						<input type="radio" className="form-check-input" id="others" name="gender" value="others" onChange={(e) => { this.selectGender(e); }} />OTHERS
								</label>
				</div>
				{submitted && !gender && <div className="error-message">Gender is required</div>}
			</div>
		)
	}
	country(submitted, country) {
		return (
			<div className={'form-group' + (submitted && !country ? ' has-error' : '')}>
				<label htmlFor="country">Country: </label> <br />
				<CountryDropdown style={{ width: '100%', height: '38px', border: '1px solid #ced4da' }} value={country} onChange={(val) => this.selectCountry(val)} />
				{/* <input type="text" id="country" className="form-control input-shadow" placeholder="Select Country" value={this.state.country}
					onChange={(e) => { this.handleInputChange(e); }} name="country" /> */}
				{submitted && !country && <div className="error-message">Country is required</div>}
			</div>
		)
	}
	submit() {
		return (
			<div>
				<button type="button" onClick={(e) => { this.submitRegister(e); }} className="btn btn-primary btn-block">Register</button>
				<Link to="/login" className="btn btn-link">Login</Link>
			</div>
		)
	}
	render() {
		// const { registering } = this.props;
		const { firstName, lastName, userName, email, password, gender, country, submitted } = this.state;
		return (
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4 col-md-offset-4">
					<h2 className="text-center">User Registration</h2><form>
						{this.firstName(submitted, firstName)}
						{this.lastName(submitted, lastName)}
						{this.userName(submitted, userName)}
						{this.email(submitted, email)}
						{this.password(submitted, password)}
						{this.gender(submitted, gender)}
						{this.country(submitted, country)}
						{this.submit()}
					</form>
				</div>
				<div className="col-md-4"></div>
			</div >
		)
	}
}

function mapState(state) {
	const { registering } = state.register;
	return { registering };
}

const actionCreators = {
	register: userActions.register
}

const connectedRegister = connect(mapState, actionCreators)(Register);
export { connectedRegister as Register };