import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makestyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// import { userActions } from '../actions/user.actions'

  // const BASE_URL = "https://polaroided-backend.herokuapp.com"
  const BASE_URL = "http://localhost:4000"

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // name, email, username and password
            user: {
                name: '',
                email: '',
                username: '',
                password: ''
            },
            submitted: false
        };
    }


    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        // user.name user.email user.username user.password
        console.log(user)
        if (user.name && user.email && user.username && user.password) {
            register(user);
            this.props.history.push('/');
        }
    }




    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                        <TextField label="Name" htmlFor="name" type="text" className="form-control" name="name" value={user.name} onChange={(event) => this.handleChange(event)} />
                        {submitted && !user.name &&
                            <div className="help-block">Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <TextField type="text" label="Email" htmlFor="email" className="form-control" name="email" value={user.email} onChange={(event) => this.handleChange(event)} />
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <TextField htmlFor="username" label="Username" type="text" className="form-control" name="username" value={user.username} onChange={(event) => this.handleChange(event)} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <TextField htmlFor="password" label="Password" type="password" className="form-control" name="password" value={user.password} onChange={(event) => this.handleChange(event)} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering && <strong>Loading ... </strong>}
                        <Button><Link to="/" >Cancel</Link></Button>
                    </div>
                </form>
            </div>
        );
    }
}

// function mapState(state) {
//     const { registering } = state.registration;
//     return { registering };
// }

// const actionCreators = {
//     register: userActions.register,
//     login: userActions.login
// }

export default Register

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    return fetch(`${BASE_URL}/registrations`, requestOptions).then(handleResponse);
}

// function update(user) {
//     const requestOptions = {
//         method: 'PATCH',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${BASE_URL}/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE'
//     };

//     return fetch(`${BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
// }

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data)
        return data;
    });
}