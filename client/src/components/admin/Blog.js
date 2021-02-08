import React from "react";
import {
  ChipField,
  Create,
  Datagrid,
  DateField,
  DateInput,
  DeleteButton,
  Edit,
  EditButton,
  ImageField,
  List,
  ReferenceField,
  required,
  RichTextField,
  SelectInput,
  Show,
  ShowButton,
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
        <ReferenceField label="Posted By" source="postedBy" reference="users" linkType="show">
          <ChipField source="name" />
        </ReferenceField>
        <DateField source="publishedAt" label="Published On" />
        <TextField source="accepted" />
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
        <RichTextInput source="body" label="Body"
          toolbar={[['bold', 'italic', 'underline', 'strike'],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'font': [] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['blockquote', 'code-block'],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],
          [{ 'align': [] }],
          ['image'],
          ['clean']]} />
        <TextInput source="postedBy" label="Posted By" />
        <TextInput source="pic" label="Image Link" />
        <DateInput
          source="publishedAt"
          label="Published At"
          defaultValue={new Date()}
        />
        <SelectInput
          source="accepted"
          choices={[
            { id: "yes", name: "Yes" },
            { id: "no", name: "No" },
          ]}
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
        <TextField source="accepted" />
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
        <RichTextInput source="body" validate={required()}
          toolbar={[['bold', 'italic', 'underline', 'strike'],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'font': [] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['blockquote', 'code-block'],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],
          [{ 'align': [] }],
          ['link', 'image', 'video'],
          ['clean']]}
        />
        <TextInput source="postedBy" validate={required()} label="Posted By" />
        <TextInput source="pic" label="Image Link" />
        <DateInput
          source="publishedAt"
          label="Published At"
          validate={required()}
        />
        <SelectInput
          source="accepted"
          choices={[
            { id: "Yes", name: "Yes" },
            { id: "No", name: "No" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};
