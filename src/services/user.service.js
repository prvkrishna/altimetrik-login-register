// import { authHeader } from '../helpers';

export const userService = {
	login,
	logout,
	register
};

function login(email, password) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	};

	return fetch(`http://localhost:8080/authAPI/login`, requestOptions)
		.then(handleResponse)
		.then(user => {
			localStorage.setItem('user', JSON.stringify(user));
			return user;
		});
}

// remove user from local storage to log user out
function logout() {
	localStorage.removeItem('user');
}

// register user request
function register(user) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user)
	};
	return fetch(`http://localhost:8080/authAPI/register`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok || !data.status) {
			if (response.status === 401 || response.status === false) {
				// auto logout if 401 response returned from api
				logout();
				// location.reload(true);
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}