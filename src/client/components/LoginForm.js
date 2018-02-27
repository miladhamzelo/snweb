import React from 'react';

const LoginForm = ({ handleSubmit }) => (
    <div className="container">
        <div className="row">
            <div className="col s12 m12 l12">
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-content">           
                                <div className="row">
                                    <span className="card-title col s8 offset-s2">Panel de control | <small>SNOnline</small></span>             
                                </div>                        
                                <div className="row">
                                    <div className="input-field col s8 offset-s2">                
                                        <input id="email" type="email" name="email" className="validate" />
                                        <label htmlFor="email">Email</label>
                                    </div>                                        
                                </div>
                                <div className="row">
                                    <div className="input-field col s8 offset-s2">                
                                        <input id="password" type="password" name="password" className="validate" />            
                                        <label htmlFor="password">Password</label>
                                    </div>                    
                                </div>                                              
                        </div>
                        <div className="card-action">
                            <div className="row">
                                <div className="col s12" style={{textAlign: 'center'}}>
                                    <button className="btn waves-effect waves-light" type="submit">Ingresar</button>   
                                </div>
                            </div>                                                                                                                     
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    </div>
);

export default LoginForm;