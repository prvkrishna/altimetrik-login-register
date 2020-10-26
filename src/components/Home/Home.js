import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../../actions';

class Home extends Component {

	render() {
		return (
			<div className="row home-page">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<div className="text-center">
						Welcome {this.props.user.user}
					</div>
				</div>
				<div className="col-md-4">
					<div className="text-right log-out">
						<Link className="btn btn-primary" to="/login">Logout</Link>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount() {
		console.log("user: ", this.props.user)
	}
}

function mapState(state) {
	const { users, authentication } = state;
	const { user } = authentication;
	return { user, users };
}

const connectedHome = connect(mapState, null)(Home);
export { connectedHome as Home };

