import React from 'react';
import App from './App';
import Admin from './Admin';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...LoginPage,
                path: '/login'                
            },
            {
                ...Admin,
                routes: [
                    {
                        ...DashboardPage,
                        path: '/admin/dashboard',
                        exact: true
                    }
                ]
            },
            {
                ...NotFoundPage
            }
        ]
    }
];