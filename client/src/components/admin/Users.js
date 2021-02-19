import { useContext, useEffect } from "react";
import {
    BooleanField,
    ChipField,
    Datagrid,
    DeleteButton,
    Edit,
    List,
    ReferenceArrayField,
    SelectInput,
    Show,
    ShowButton,
    SimpleForm,
    SimpleShowLayout,
    SingleFieldList,
    TextField,
    TextInput,
} from "react-admin";

export const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="registration_no" />
                <TextField source="role" />
                <BooleanField source="confirmed" />
                <ShowButton basePath="/users" />
                <DeleteButton basePath="/users" />
            </Datagrid>
        </List>
    );
};

export const UserShow = (props) => {
    return (
        <Show {...props} title="User Show">
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <BooleanField source="confirmed" />
                <TextField source="email" label="Email" />
                <TextField source="registration_no" />
                <TextField source="year" />
                <TextField source="role" />
                <ReferenceArrayField source="projects" reference="projects" >
                    <SingleFieldList linkType="show">
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceArrayField>
                <ReferenceArrayField source="blogs" reference="blogs">
                    <SingleFieldList linkType="show">
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceArrayField>
                <TextField source="linkedin_url" />
            </SimpleShowLayout>
        </Show>
    )
}

export const UserEdit = (props) => {

    return (
        <Edit title="User Edit" {...props}>
            <SimpleForm redirect="/issue">
                <TextInput label="Id" source="id" />
                <TextInput label="Name" source="name" />
                <TextInput label="Email" source="email" />
                <SelectInput
                    source="role"
                    choices={[
                        { id: "Super-admin", name: "Super Admin" },
                        { id: "Admin", name: "Admin" },
                        { id: "User", name: "User" },
                    ]}
                />
            </SimpleForm>
        </Edit>
    );
};