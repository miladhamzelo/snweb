import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AppBar extends Component {
    render() {
        return (
            <div>
                <h1>Este es el cabezal</h1>
            </div>
        );
    };
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(AppBar);