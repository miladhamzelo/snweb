import React from 'react';

const Home = () => {
    return (
        <div>
            <div>This is Home</div>
            <button onClick={() => console.log('hi there')}>Press me!</button>
        </div>
    )
};

export default {
    component: Home
};