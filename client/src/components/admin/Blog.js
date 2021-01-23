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
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
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
        <TextInput source="body" label="Body" />
        <TextInput source="postedBy" label="Posted By" />
        <ImageInput accept="image/*" source="pic">
          <ImageField source="src" title="title" />
        </ImageInput>
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
        <TextField source="title" />
        <RichTextField source="body" />
        <TextField source="postedBy" />
        <ImageField src="pic" />
        <DateField source="publishedAt" />
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
        <DateInput
          source="publishedAt"
          label="Published At"
          validate={required()}
        />
        <ImageInput label="Picture" accept="image/*">
          <ImageField source="pic" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};
