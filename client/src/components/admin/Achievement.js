import {
    BooleanField,
    ChipField,
    Datagrid,
    DateField,
    DeleteButton,
    Edit,
    EditButton,
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
  
  
  export const AchievementList = (props) => {
    return (
      <List {...props}>
        <Datagrid>
          <TextField source="desc" />
          <DateField source="year" label="Year" />
          <ShowButton basePath="/achievement" />
          <EditButton basePath="/achievement" />
          <DeleteButton basePath="/achievement" />
        </Datagrid>
      </List>
    );
  };
  