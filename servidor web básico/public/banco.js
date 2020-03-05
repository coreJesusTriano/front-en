// Definicion constantes
const SERVER ='http://localhost:8085';
const URL_OK = `${SERVER}/ok`;

// function ok(callback(err,datos)) 
const ok = (callback) => {

  const opciones = {
    url: URL_OK,
    metodoHTTP: 'GET'
  }

  http(opciones, (err, response) => {
    if (err) callback(err); // retorna el error
    callback(null, response); // retorna la respuesta
  });  
};
