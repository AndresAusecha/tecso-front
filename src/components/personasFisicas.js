// in src/posts.js
import React from 'react';
import { Show, 
    SimpleShowLayout, 
    TextField,
    List,
    Datagrid,
    NumberField,
    ShowButton,
    Create,
    TextInput,
    SimpleForm,
    EditButton,
    Edit
} from 'react-admin';

export const PersonasFisicasShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="dni" />
            <TextField source="cuit" />
            <TextField source="nombre" />
            <TextField source="apellido" />
        </SimpleShowLayout>
    </Show>
);

export const PersonasfisicasList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="dni" />
            <TextField source="cuit" />
            <TextField source="nombre" />
            <TextField source="apellido" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const PersonasfisicasCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="apellido" /*options={{ multiLine: true }}*/ />
            <TextInput source="dni" /*options={{ multiLine: true }}*/ />
            <TextInput source="cuit" /*options={{ multiLine: true }}*/ />
        </SimpleForm>
    </Create>
);

export const PersonasfisicasEdit = (props) => (
    <Edit title="Editar Personas fisicas" {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="apellido" /*options={{ multiLine: true }}*/ />
            <TextInput source="dni" /*options={{ multiLine: true }}*/ />
            <TextInput source="cuit" /*options={{ multiLine: true }}*/ />
        </SimpleForm>
    </Edit>
);