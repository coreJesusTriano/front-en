// Definicion constantes
const SERVER ='http://localhost:8085';
const URL_OK = `${SERVER}/ok`;
const URL_LOGIN_GESTOR = `${SERVER}/login/gestor/`;
const URL_GESTORES = `${SERVER}/gestores/`;


// declaración de la función ok
// function ok(callback(err,datos)) 
const ok = (callback) => {

  const opciones = {
    url: URL_OK,
    metodoHTTP: 'GET'
  }

  http(opciones, (err, response) => {
    if (err) return callback(err); // retorna el error
    callback(null, response); // retorna la respuesta "return" no necesario al ser última instrucción
  });  
};

// declaración de la función loginGestor
// function loginGestor(usuario, password, callback(err))
function loginGestor(usuario, password, callback) {

  const opcionesLogin = {
    url: URL_LOGIN_GESTOR,
    metodoHTTP: 'POST',
    cabeceras: {
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    json: true,
    body: `usuario=${usuario}&password=${password}`
  };
  // http(opciones, callback(err, response));
  http(opcionesLogin, (err, response)=>{
    if(err) return callback(err);
    if(!response.ok) return callback(response.msg);
    // si todo fue correcto
    // guardo token en el localStorage del navegador, que es una db key:value
    localStorage.setItem('tokenGestor', response.data.token);

    callback(null); // o callback();
  });
} // fin loginGestor
