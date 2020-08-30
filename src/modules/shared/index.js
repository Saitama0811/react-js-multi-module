import React from 'react';

const Shared = () => (
    <div>Shared Module</div>
);

export default {
    routeProps: {
        path: '/shared',
        component: Shared,
    },
    name: 'Shared',
};
