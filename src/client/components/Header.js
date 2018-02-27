import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {

    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <Link to="/login">Login</Link>
    );

    return (
        <div>
            <Link to="/">SNOnline</Link>
            <div>
                <Link to="/users">Users</Link>
                {auth ? (<Link to="/admins">Admins</Link>) : ''}                
                {authButton}
            </div>
        </div>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);