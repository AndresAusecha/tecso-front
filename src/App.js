import React, { Component } from 'react';
import logo from './logo.svg';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';
import jsonApiClient from './jsonApiClient/jsonApiClient';

const dataProvider = jsonApiClient();
const App = () => 
    <Admin dataProvider={dataProvider} >
        <Resource name="personasFisicas" list={ListGuesser}></Resource>
        <Resource name="personasJuridicas"></Resource>
     </Admin>;

export default App;
