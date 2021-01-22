import { Create, Datagrid, DateField, DateInput, DeleteButton, Edit, EditButton, ImageField, ImageInput, List, NumberField, NumberInput, required, RichTextField, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin'

export const ComponentList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' label="Name" />
                <TextField source='type' label="Type" />
                <NumberField source='issued' label='Issued' />
                <ShowButton basePath='/components' />
                <EditButton basePath='/components' />
                <DeleteButton basePath='/components' />
            </Datagrid>
        </List>
    )
}

export const ComponentCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm redirect='/blogs'>
                <TextInput source='name' label="Name" />
                <TextInput source='type' label="Type" />
                <NumberInput source='issued' label='Issued' />
                <NumberInput source='available' label='Available' />
                <ImageInput accept="image/*" source="pic">
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    )
}

export const ComponentShow = (props) => {
    return (
        <Show {...props} title="Blog Show">
            <SimpleShowLayout>
                <TextField source="name" label="Name" />
                <TextField source='type' label="Type" />
                <NumberField source='issued' label='Issued' />
                <NumberField source='available' label='Available' />
                {/* <ImageField src="pic" /> */}
            </SimpleShowLayout>
        </Show>
    )
}

export const ComponentEdit = (props) => {
    return (
        <Edit title='Edit Blog' {...props}>
            <SimpleForm redirect='/blogs'>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="title" validate={required()} label="Title" />
                <TextInput source="body" validate={required()} />
                <TextInput source="postedBy" validate={required()} label="Posted By" />
                {/* <ImageInput label="Picture" accept="image/*">
                    <ImageField source="pic" />
                </ImageInput> */}
            </SimpleForm>
        </Edit>
    )
}

