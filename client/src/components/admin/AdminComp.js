import React from 'react'
import { Admin, Resource } from 'react-admin'
import authProvider from './authProvider'
import { BlogCreate, BlogEdit, BlogList, BlogShow } from './Blog'
import { ComponentCreate, ComponentEdit, ComponentList } from './Component'
import { IssueEdit, IssueList } from './Issues'
import { ProjectCreate, ProjectEdit, ProjectList, ProjectShow } from './Project';
import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';
import { NewsCreate, NewsEdit, NewsList, NewsShow } from './News'

function AdminComp() {

    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const token = localStorage.getItem('jwtToken');
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };

    return (
        <Admin
            authProvider={authProvider}
            dataProvider={simpleRestProvider('http://localhost:3000/api', httpClient)}>
            <Resource name='projects' list={ProjectList} create={ProjectCreate} edit={ProjectEdit} show={ProjectShow} />
            <Resource name='blogs' list={BlogList} create={BlogCreate} edit={BlogEdit} show={BlogShow} />
            <Resource name='issue' list={IssueList} edit={IssueEdit} />
            <Resource name='component' list={ComponentList} create={ComponentCreate} edit={ComponentEdit} />
            <Resource name='news' list={NewsList} create={NewsCreate} edit={NewsEdit} show={NewsShow} />
        </Admin>
    )
}

export default AdminComp
