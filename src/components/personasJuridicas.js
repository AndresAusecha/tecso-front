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

export const PersonasJuridicasShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <NumberField source="anioFundacion" />
            <NumberField source="cuit" />
            <TextField source="razonSocial"/>
        </SimpleShowLayout>
    </Show>
);

export const PersonasJuridicasList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="anioFundacion" />
            <NumberField source="cuit" />
            <TextField source="razonSocial"/>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const PersonasJuridicasCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="razonSocial" validate={[required(), maxLength(200, "Razon social demasiado larga")]}/>
            <TextInput source="anioFundacion" validate={[required(), maxLength(4, "Anio fundacion demasiado largo")]} />
            <TextInput source="cuit" validate={[required(), number("El cuit debe ser un valor numerico")]} />
        </SimpleForm>
    </Create>
);

export const PersonasJuridicasEdit = (props) => (
    <Edit title="Editar Personas Juridicas" {...props}>
         <SimpleForm>
            <TextInput source="razonSocial" validate={[required(), maxLength(200, "Razon social demasiado larga")]}/>
            <TextInput source="anioFundacion" validate={[required(), maxLength(4, "Anio fundacion demasiado largo")]} />
            <TextInput source="cuit" validate={[required(), number("El cuit debe ser un valor numerico")]} />
        </SimpleForm>
    </Edit>
);