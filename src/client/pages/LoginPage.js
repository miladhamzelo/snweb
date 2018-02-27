import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LoginForm from './../components/LoginForm';
import { fetchCurrentUser } from '../actions';


const LoginPage = ({ auth, dispatch}) => {
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/login', {email: e.target.email.value, password: e.target.password.value})
            .then((res) => {
                if(res.status === 200){
                    dispatch(fetchCurrentUser());
                } else {
                    console.log(res);
                }
            }).catch((err) =>{
                alert('Usuario y/o contraseña no válidos.')
            })
    }
    return (
        auth && auth ? (
            <Redirect to="/admin/dashboard" />
        ) : (
            <div className="row" style={{marginTop: '15vh'}}>
                <LoginForm handleSubmit={handleSubmit} />                                                            
            </div>                                                     
        )        
    )
}


function mapStateToProps({ auth }) {
    return { auth };
}


export default {
    component: connect(mapStateToProps)(LoginPage)
}