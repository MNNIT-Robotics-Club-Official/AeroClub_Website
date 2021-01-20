import React from 'react'
import { Admin, fetchUtils, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import authProvider from './authProvider'
import { BlogCreate, BlogEdit, BlogList, BlogShow } from './Blog'
import myDataProvider from './myDataProvider'

function AdminComp() {

    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const token = localStorage.getItem('token');
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };

    return (
        <Admin
            authProvider={authProvider}
            dataProvider={myDataProvider}>
            <Resource name='blogs' list={BlogList} create={BlogCreate} edit={BlogEdit} />
        </Admin>
    )
}

export default AdminComp
