import React, { useContext, useEffect } from 'react'
import { Admin, Resource } from 'react-admin'
import authProvider from './authProvider'
import { BlogCreate, BlogEdit, BlogList, BlogShow } from './Blog'
import { ComponentCreate, ComponentEdit, ComponentList } from './Component'
import { IssueEdit, IssueList } from './Issues'
import { ProjectCreate, ProjectEdit, ProjectList, ProjectShow } from './Project';
import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';
import { NewsCreate, NewsEdit, NewsList, NewsShow } from './News'
import { WorkshopCreate, WorkshopEdit, WorkshopList, WorkshopShow } from './Workshop'
import { UserList, UserShow, UserEdit } from './Users'
import { baseURL } from '../../baseUtils'
import { UserContext } from '../../UserProvider'

function AdminComp() {

    const [user,] = useContext(UserContext)

    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
        const token = localStorage.getItem('jwtToken');
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    };
    useEffect(() => {
        console.log(user)
    }, [])

    return (
        < Admin
            authProvider={authProvider}
            dataProvider={simpleRestProvider(`${baseURL}/api`, httpClient)
            }>
            <Resource name='users' list={UserList} show={UserShow} edit={user?.role === 'Super-admin' ? UserEdit : null} />
            <Resource name='projects' list={ProjectList} create={ProjectCreate} edit={ProjectEdit} show={ProjectShow} />
            <Resource name='blogs' list={BlogList} create={BlogCreate} edit={BlogEdit} show={BlogShow} />
            <Resource name='issue' list={IssueList} edit={IssueEdit} />
            <Resource name='component' list={ComponentList} create={ComponentCreate} edit={ComponentEdit} />
            <Resource name='news' list={NewsList} create={NewsCreate} edit={NewsEdit} show={NewsShow} />
            <Resource name='workshop' list={WorkshopList} create={WorkshopCreate} edit={WorkshopEdit} show={WorkshopShow} />
        </Admin >
    )
}

export default AdminComp
