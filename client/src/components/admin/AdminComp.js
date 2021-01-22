import React from 'react'
import { Admin, fetchUtils, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import authProvider from './authProvider'
import { BlogCreate, BlogEdit, BlogList, BlogShow } from './Blog'
import { ComponentCreate, ComponentEdit, ComponentList, ComponentShow } from './Component'
import myDataProvider from './myDataProvider'

function AdminComp() {
    return (
        <Admin
            authProvider={authProvider}
            dataProvider={myDataProvider}>
            <Resource name='blogs' list={BlogList} create={BlogCreate} edit={BlogEdit} show={BlogShow} />
            <Resource name='components' list={ComponentList} create={ComponentCreate} edit={ComponentEdit} show={ComponentShow} />
        </Admin>
    )
}

export default AdminComp
