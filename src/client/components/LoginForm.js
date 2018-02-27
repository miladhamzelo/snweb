import React from 'react';

const LoginForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Ingresar</button>
    </form>
);

export default LoginForm;