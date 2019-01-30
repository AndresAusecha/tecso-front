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
      if (type == 'GET_LIST') {
          method = 'get';
          finalUrl = baseUrl + resource;
      }
      else if(type == 'GET_ONE'){
          method = 'get';
          finalUrl = baseUrl + resource;
        }

        else if(type == 'CREATE'){
            method = 'post';
            if(resource == 'personasFisicas'){
                options.data = { nombre: params.data.nombre,
                    apellido: params.data.apellido,
                    dni: params.data.dni,
                    cuit: params.data.cuit
                };
            }else{
                options.data = { 
                    anioFundacion: params.data.anioFundacion,
                    cuit: params.data.cuit,
                    razonSocial: params.data.razonSocial
                };
            }
            finalUrl = baseUrl + resource;
        }

          else if(type == 'UPDATE'){
              method = 'put';
              if(resource == 'personasFisicas'){
                  options.data = { nombre: params.data.nombre,
                    apellido: params.data.apellido,
                    dni: params.data.dni,
                    cuit: params.data.cuit
                }
                }else {
                    options.data = { 
                        anioFundacion: params.data.anioFundacion,
                        cuit: params.data.cuit,
                        razonSocial: params.data.razonSocial
                    }; 
                }
                finalUrl = baseUrl + resource + '/' + params.data.id;
            }
          else if(type == 'DELETE'){

              method = 'delete';
              finalUrl = baseUrl + resource + '/' + params.id;
              console.log(finalUrl);
            }

          else if('DELETE_MANY'){
              method = 'delete';
              finalUrl = baseUrl + resource + '/' + params.ids[0];
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
        } else if(resource == "personasJuridicas"){
            if(type == "GET_LIST"){
            var length = response.data._embedded.personasJuridicas.length;
            var listData = {
                data: response.data._embedded.personasJuridicas.map(
                value => Object.assign({
                    id: value._links.self.href.split("/personasJuridicas/")[1],
                    anioFundacion: value.anioFundacion,
                    cuit: value.cuit,
                    razonSocial: value.razonSocial
                },value.attributes
                )),
                total: length
            }
            return listData;
            
        }else if(type == 'GET_ONE'){
            var result = {
                data: {
                    id:0,
                    anioFundacion: response.anioFundacion,
                    cuit: response.cuit,
                    razonSocial: response.razonSocial
                }
            }
            return result;
        }  
        else if (type == 'CREATE') {
            var result = {  
                data: {
                    id: response.data._links.self.href.split("/personasJuridicas/")[1],
                    anioFundacion: response.anioFundacion,
                    cuit: response.cuit,
                    razonSocial: response.razonSocial
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