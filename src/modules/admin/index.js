import React from 'react';

const Admin = () => (
    <div>Admin Module</div>
);

export default {
    routeProps: {
        path: '/admin',
        component: Admin,
    },
    name: 'Admin',
};
