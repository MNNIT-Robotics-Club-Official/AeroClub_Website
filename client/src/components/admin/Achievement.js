import {
  ArrayInput,
  Create,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  SimpleForm,
  TextField,
  TextInput,
  SimpleFormIterator,
  DateInput,
  Edit,
  Show,
  SimpleShowLayout,
  ArrayField
} from "react-admin";

export const AchievementList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="desc" />
        <TextField source="year" label="Year" />
        <ShowButton basePath="/achievement" />
        <EditButton basePath="/achievement" />
        <DeleteButton basePath="/achievement" />
      </Datagrid>
    </List>
  );
};

export const AchievementCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/achievement">
        <TextInput source="desc" label="Description" />
        <ArrayInput source="team" label="Team">
          <SimpleFormIterator>
            <TextInput source="name" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="year" label="Year" />
      </SimpleForm>
    </Create>
  );
};

export const AchievementEdit = (props) => {
  return (
    <Edit title="Edit Project" {...props}>
      <SimpleForm redirect="/achievement">
        <TextInput source="desc" label="Description" />
        <ArrayInput source="team" label="Team">
          <SimpleFormIterator>
            <TextInput source="name" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="year" label="Year" />
      </SimpleForm>
    </Edit>
  );
};

export const AchievementShow = (props) => {
  return (
    <Show {...props} title="Achievement Show">
      <SimpleShowLayout>
        <TextField source="desc" label="Description" />
        <ArrayField source="team" label="Team">
          <Datagrid>
            <TextField source="name" />
          </Datagrid>
        </ArrayField>
        <TextField source="year" label="Year" />
      </SimpleShowLayout>
    </Show>
  );
};
