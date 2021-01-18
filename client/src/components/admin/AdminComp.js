import React from 'react'
import { Admin, fetchUtils, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { BlogList } from './BlogList'
import authProvider from './authProvider'

function AdminComp() {

    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const { token } = JSON.parse(localStorage.getItem('adminAuth'));
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };

    return (
        <Admin
            authProvider={authProvider}
            dataProvider={restProvider('http://localhost:3000', httpClient)}>
            <Resource name='blogs' list={BlogList} />
        </Admin>
    )
}

export default AdminComp
