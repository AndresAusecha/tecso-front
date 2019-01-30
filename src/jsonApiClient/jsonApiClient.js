import axios from 'axios';

export default apiUrl => (type, resource, params) => {
    console.log('type: ' + type + ' resource: ' + resource + ' params: ' + params);
    let baseUrl = 'http://127.0.0.1:8080/api/';
    var method = '';
    const options = {
        headers: { "Access-Control-Allow-Origin": "*" }
      };
      switch (type) {
          case 'GET_LIST':
          method = 'get';
          break;
          
          default:
          break;
        }
    //    const options = { method: method };
    options.method = method;
    return axios({
        url: baseUrl + resource,
        ...options
      }).then((response) => {
        console.log(response.data._embedded.personasFisicas[0]._links.self.href);
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
      }); 
}