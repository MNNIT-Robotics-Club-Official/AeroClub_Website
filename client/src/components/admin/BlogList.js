import React from 'react'
import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin'

export const BlogList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <TextField source='body' />
                <DateField source='publishedAt' />
                <EditButton basePath='/blog' />
                <DeleteButton basePath='/blog' />
            </Datagrid>
        </List>
    )
}
