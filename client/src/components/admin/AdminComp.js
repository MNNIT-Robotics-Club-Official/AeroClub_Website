import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import authProvider from './authProvider'
import { BlogCreate, BlogEdit, BlogList, BlogShow } from './Blog'
import { ComponentCreate, ComponentEdit, ComponentList } from './Component'
import myDataProvider from './myDataProvider'
import { IssueEdit, IssueList } from './Issues'
import { ProjectCreate, ProjectEdit, ProjectList, ProjectShow } from './Project';

function AdminComp() {
    return (
        <Admin
            authProvider={authProvider}
            dataProvider={myDataProvider}>
            <Resource name='projects' list={ProjectList} create={ProjectCreate} edit={ProjectEdit} show={ProjectShow} />
            <Resource name='blogs' list={BlogList} create={BlogCreate} edit={BlogEdit} show={BlogShow} />
            <Resource name='issue' list={IssueList} edit={IssueEdit} />
            <Resource name='component' list={ComponentList} create={ComponentCreate} edit={ComponentEdit} />
        </Admin>
    )
}

export default AdminComp
