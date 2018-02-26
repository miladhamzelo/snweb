import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class RequireAuth extends Component {
        render() {
            switch (this.props.auth) {
                case false:
                    return <Redirect to="/" />
                case null:
                    return <div>Cargando ...</div>
                default:
                    return <ChildComponent {...this.props} />
            }
        }
    }

    function mapStateToProps ({ auth }) {
        return { auth };
    }

    return connect(mapStateToProps)(RequireAuth);
};

