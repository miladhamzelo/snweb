import React from 'react';


const LoginForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div className="card">
            <header className="is-center">
                <h4>Panel de control</h4>
            </header>

            <div className="row">
                <div className="col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" />
                </div>
            </div>

            <footer className="is-center">
                <button type="submit" className="button primary">Ingresar</button>
            </footer>
        </div>
    </form>
);


export default LoginForm;