import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Página no encontrada</h1>
};

export default {
    component: NotFoundPage
};