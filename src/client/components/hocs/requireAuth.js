import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions';
import Spinner from './../Spinner';

export default (ChildComponent) => {
    class RequireAuth extends Component {
        componentDidMount(){
            this.props.dispatch(fetchCurrentUser());
        }
        render() {
            switch (this.props.auth) {
                case false:
                    return <Redirect to="/login" />
                case null:
                    return <Spinner />
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

