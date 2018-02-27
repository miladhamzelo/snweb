import React from 'react';
import App from './App';
import Admin from './Admin';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
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
                path: '/admin/dashboard',
                routes: [
                    {
                        ...AdminsListPage,
                        path: '/admin/dashboard/admins',
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