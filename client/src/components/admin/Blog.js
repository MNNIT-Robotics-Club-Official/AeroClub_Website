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
  required,
  RichTextField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  UrlField,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const BlogList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="postedBy" label="Posted By" />
        <DateField source="publishedAt" label="Published At" />
        <ShowButton basePath='/blogs' />
        <EditButton basePath="/blogs" />
        <DeleteButton basePath="/blogs" />
      </Datagrid>
    </List>
  );
};

export const BlogCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/blogs">
        <TextInput source="title" label="Title" />
        <RichTextInput source="body" label="Body" />
        <TextInput source="postedBy" label="Posted By" />
        <TextInput source="pic" label="Image Link" />
        <DateInput
          source="publishedAt"
          label="Published At"
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  );
};

export const BlogShow = (props) => {
  return (
    <Show {...props} title="Blog Show">
      <SimpleShowLayout>
        <TextField source="title" label="Title" />
        <RichTextField source="body" label="Body" />
        <TextField source="postedBy" label="Posted By" />
        <ImageField source="pic" label="Image" />
        <DateField source="publishedAt" label="Published At" />
      </SimpleShowLayout>
    </Show>
  );
};

export const BlogEdit = (props) => {
  return (
    <Edit title="Edit Blog" {...props}>
      <SimpleForm redirect="/blogs">
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validate={required()} label="Title" />
        <RichTextInput source="body" validate={required()} />
        <TextInput source="postedBy" validate={required()} label="Posted By" />
        <TextInput source="pic" label="Image Link" />
        <DateInput
          source="publishedAt"
          label="Published At"
          validate={required()}
        />
      </SimpleForm>
    </Edit>
  );
};
