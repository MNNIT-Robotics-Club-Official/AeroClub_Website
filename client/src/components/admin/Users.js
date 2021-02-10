import {
    BooleanField,
    ChipField,
    Datagrid,
    DeleteButton,
    List,
    ReferenceArrayField,
    Show,
    ShowButton,
    SimpleShowLayout,
    SingleFieldList,
    TextField,
} from "react-admin";

export const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="registration_no" />
                <TextField source="year" />
                <BooleanField source="confirmed" />
                <ShowButton basePath="/users" />
                <DeleteButton basePath="/users" />
            </Datagrid>
        </List>
    );
};

export const UserShow = (props) => {
    return (
        <Show {...props} title="Component Show">
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name" />
                <BooleanField source="confirmed" />
                <TextField source="email" label="Type" />
                <TextField source="registration_no" />
                <TextField source="year" />
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

