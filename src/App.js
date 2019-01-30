import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import './App.css';
import jsonApiClient from './jsonApiClient/jsonApiClient';
import { PersonasfisicasList,PersonasFisicasShow ,PersonasfisicasCreate,PersonasfisicasEdit } from './components/personasFisicas';

const dataProvider = jsonApiClient();
const App = () => 
    <Admin dataProvider={dataProvider} >
        <Resource name="personasFisicas" list={PersonasfisicasList} show={PersonasFisicasShow} create={PersonasfisicasCreate} edit={PersonasfisicasEdit}/>
        <Resource name="personasJuridicas" list={ListGuesser}/>
     </Admin>;

export default App;
