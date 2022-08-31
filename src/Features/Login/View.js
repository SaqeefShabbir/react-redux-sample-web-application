import { useState } from 'react';

import './View.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserTie, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

import logo from '../../images/restaurant_logo.png';

library.add(faUserTie, faEyeSlash, faEye)

var userTieIconStyle = {
    display: 'block'
}

var eyeSlashIconStyle = {
    display: 'block'
}

var eyeIconStyle = {
    display: 'none'
}

const View = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { submitCredentials } = props;

    function handleShowHidePass() {
        if (document.getElementById('eyeSlashIcon').style.display !== "none") {
            document.getElementById('eyeSlashIcon').style.display = "none";
            document.getElementById('eyeIcon').style.display = "block";
            document.getElementById('password').setAttribute('type', 'text');
        }
        else {
            document.getElementById('eyeIcon').style.display = "none";
            document.getElementById('eyeSlashIcon').style.display = "block";
            document.getElementById('password').setAttribute('type', 'password');
        }
    }

    return (
        <div className="App">
            <div className="split left">
                <div className="centered">
                    <img src={logo} alt="Restaurant logo" />
                    <p>Stop, eat and go!</p>
                </div>
            </div>

            <div className="split right">
                <div className="centered-right">
                    <h2>Login</h2>
                    <hr />
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <div className="input-group mb-3">
                                <input type="text" placeholder="Enter Username" id="username" name="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)}></input>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={userTieIconStyle}><FontAwesomeIcon icon={faUserTie} /></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="input-group mb-3">
                                <input type="password" placeholder="Enter Password" id="password" name="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}></input>
                                <div className="input-group-prepend" onClick={handleShowHidePass}>
                                    <span className="input-group-text pass-eye" id="eyeSlashIcon" style={eyeSlashIconStyle}><FontAwesomeIcon name="showHideIcon" icon={faEyeSlash} /></span>
                                    <span className="input-group-text pass-eye" id="eyeIcon" style={eyeIconStyle}><FontAwesomeIcon icon={faEye} /></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-success form-control mt-4"
                                onClick={() =>
                                    submitCredentials({ username, password })
                                }
                            >Enter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default View;