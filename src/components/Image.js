import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// import { userActions } from '../actions/user.actions';

  // const BASE_URL = "https://polaroided-backend.herokuapp.com"
  const BASE_URL = "http://localhost:4000"
  
class Image extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.logout();

        this.state = {
            anchorEl: null, 
            photo: {
              img_src: "",
              caption: "",
            },
            user_id: JSON.parse(localStorage.user).user.id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { img_src, caption, user_id } = this.state;
        const photo = {img_src: img_src, caption: caption, user_id: user_id}
        if (img_src && caption && user_id) {
            handleUpload(photo);
            this.props.history.push('/')
        }
    }

    render() {
        const { img_src, caption, submitted } = this.state;
        return (
            <div>
                <h2>Upload</h2>
                <form name="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className={'form-group' + (submitted && !img_src ? ' has-error' : '')}>
                        <TextField type="text" label="Image Link" htmlFor="img_src" className="img_src" name="img_src" value={img_src} onChange={this.handleChange} />
                        {submitted && !img_src &&
                            <div className="help-block">Image link is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !caption ? ' has-error' : '')}>
                        <TextField type="caption" htmlFor="caption" label="Caption" className="form-control" name="caption" value={caption} onChange={this.handleChange} />
                        {submitted && !caption &&
                            <div className="help-block">Caption is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Upload</button>
                    </div>
                </form>
            </div>
        );
    }
}

// function mapState(state) {
//     const { loggingIn } = state.authentication;
//     return { loggingIn };
// }

// const actionCreators = {
//     login: userActions.login,
//     logout: userActions.logout
// };

export default Image

function handleUpload(photo) {
    debugger
    const BASE_URL = "http://localhost:4000"
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photo)
    };
  
    return fetch(`${BASE_URL}/photos`, requestOptions).then(handleResponse);
}
  
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data)
        return data;
    });
  }