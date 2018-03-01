import React from 'react';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from './actions';
import AppBar from './components/AppBar';
import requireAuth from './components/hocs/requireAuth';


const Admin = ({ route }) => {
    return (
        <div>
            <AppBar />
            <div className="container">
                {renderRoutes(route.routes)}
            </div>
        </div>
    );
};

export default {
    component: requireAuth(Admin),
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};