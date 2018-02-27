import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';

import Header from './components/Header';
import requireAuth from './components/hocs/requireAuth';

const Admin = ({ route }) => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Header />           
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component: requireAuth(Admin),
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};