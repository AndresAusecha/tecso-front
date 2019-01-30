import axios from 'axios';

export default apiUrl => (type, resource, params) => {
    console.log(type);
    console.log(resource);
    console.log(params);
    let baseUrl = 'http://127.0.0.1:8080/api/';
    var method = '';
    var finalUrl = '';
    const options = {
        headers: { "Access-Control-Allow-Origin": "*" }
      };
      switch (type) {
          case 'GET_LIST':
          method = 'get';
          finalUrl = baseUrl + resource;
          break;

          case 'GET_ONE':
          method = 'get';
          finalUrl = baseUrl + resource;
          break;

          case 'CREATE':
          method = 'post';
          options.data = { nombre: params.data.nombre,
            apellido: params.data.apellido,
            dni: params.data.dni,
            cuit: params.data.cuit
         };
         finalUrl = baseUrl + resource;
          break;

          case 'UPDATE':
          method = 'put';
          options.data = { nombre: params.data.nombre,
            apellido: params.data.apellido,
            dni: params.data.dni,
            cuit: params.data.cuit
          };
          finalUrl = baseUrl + resource + '/' + params.data.id;
          break;

          case 'DELETE':
          method = 'delete';
          finalUrl = baseUrl + resource + '/' + params.id;
          console.log(finalUrl);
          break;

          case 'DELETE_MANY':
          method = 'delete';
          finalUrl = baseUrl + resource + '/' + params.ids[0];

          default:
          break;
        }
    options.method = method;
    console.log("options: ");
    console.log(options);
    return axios({
        url: finalUrl,
        ...options
      }).then((response) => {
          console.log(response);
          if(resource == "personasFisicas"){
            if(type == "GET_LIST"){
                var length = response.data._embedded.personasFisicas.length;
                var listData = {
                    data: response.data._embedded.personasFisicas.map(
                    value => Object.assign({
                        id: value._links.self.href.split("/personasFisicas/")[1],
                        dni: value.dni,
                        cuit: value.cuit,
                        nombre: value.nombre,
                        apellido: value.apellido
                    },value.attributes
                    )),
                    total: length
                }
                return listData;
            }else if(type == 'GET_ONE'){
                var result = {
                    data: {
                        id:0,
                        dni: response.dni,
                        cuit: response.cuit,
                        nombre: response.nombre,
                        apellido: response.apellido
                    }
                }
                return result;
            }  
            else if (type == 'CREATE') {
                var result = {  
                    data: {
                        id: response.data._links.self.href.split("/personasFisicas/")[1],
                        dni: response.data.dni,
                        cuit: response.data.cuit,
                        nombre: response.data.nombre,
                        apellido: response.data.apellido
                    }  
                }
                return result;
            } 
            else {
             return response;   
            }
        }
      }); 
}