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
    Edit,
    required,
    maxLength,
    number
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
            <TextInput source="nombre" validate={[required(), maxLength(80, "Nombre demasiado largo")]}/>
            <TextInput source="apellido" validate={[required(), maxLength(250, "Apellido demasiado largo")]} />
            <TextInput source="dni" validate={[required(), number("El dni debe ser un valor numerico")]} />
            <TextInput source="cuit" validate={[required(), number("El cuit debe ser un valor numerico")]} />
        </SimpleForm>
    </Create>
);

export const PersonasfisicasEdit = (props) => (
    <Edit title="Editar Personas fisicas" {...props}>
         <SimpleForm>
            <TextInput source="nombre" validate={[required(), maxLength(80, "Nombre demasiado largo")]}/>
            <TextInput source="apellido" validate={[required(), maxLength(250, "Apellido demasiado largo")]} />
            <TextInput source="dni" validate={[required(), number("El dni debe ser un valor numerico")]} />
            <TextInput source="cuit" validate={[required(), number("El cuit debe ser un valor numerico")]} />
        </SimpleForm>
    </Edit>
);