import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    DeleteButton,
    Edit,
    EditButton,
    ImageField,
    ImageInput,
    List,
    number,
    NumberInput,
    required,
    RichTextField,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
  } from "react-admin";
  import RichTextInput from "ra-input-rich-text";
  
  export const ComponentList = (props) => {
    return (
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="type" label="Type" />
          <ImageField source="image_url" label="Image" />
          <TextField source="available" />
          <TextField source="issued" />
          <EditButton basePath="/component" />
          <DeleteButton basePath="/component" />
        </Datagrid>
      </List>
    );
  };
  
  export const ComponentCreate = (props) => {
    return (
      <Create {...props}>
        <SimpleForm redirect="/component">
          <TextInput source="name" label="Name" validate={[required()]}/>
          <TextInput source="type" label="Type" validate={[required()]}/>
          <TextInput source="image_url" label="Component Image Link" validate={[required()]}/>
          <NumberInput source="available" validate={[required(), number()]} />
        </SimpleForm>
      </Create>
    );
  };
  
  export const ComponentEdit = (props) => {
    return (
      <Edit title="Review Request" {...props}>
        <SimpleForm redirect="/component">
          <TextInput disabled label="Id" source="id" />
        </SimpleForm>
      </Edit>
    );
  };
  