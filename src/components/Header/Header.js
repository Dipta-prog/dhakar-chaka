import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    useParams
} from "react-router-dom";
import './Header.css';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Header = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log('from header user name',loggedInUser.name);
    let { transport } = useParams();
    transport = transport || 'Bike';
    console.log(transport)
    return (
        <div className="container">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to='/home'>Urban Raiders</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-3">
                            <Link className="nav-link" to='/home'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to={`/book/${transport}`}>Destination</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to=''>Blog</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to=''>Contact</Link>
                        </li>
                        <li className="nav-item mx-3">
                            {!(loggedInUser.isSignedIn) && <span type="submit"><Link  class="btn btn-outline-success my-sm-0" to='/login'>Login</Link></span>}
                            {(loggedInUser.isSignedIn) && <span class="btn my-sm-0" type="submit">{loggedInUser.name}</span>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;