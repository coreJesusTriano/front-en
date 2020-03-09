/*
Ejercicio 1: crear un archivo bancoPromise.js a partir del archivo banco.js y adaptar los métodos de la clase Banco para gestionar la asincronía mediante promesas, en lugar de con callbacks. Probar estos nuevos métodos desde el archivo main.js.
*/
// Definicion constantes
// const SERVER ='http://localhost:8085';
// const URL_OK = `${SERVER}/ok`;
// const URL_LOGIN_GESTOR = `${SERVER}/login/gestor/`;
// const URL_GESTORES = `${SERVER}/gestores/`;


class BancoPromise {

  // declaramos el método ok
  ok() {

    const promise = new Promise((resolve, reject)=>{
      
      const opciones = {
        url: URL_OK,
        metodoHTTP: 'GET'
      }
    
      http(opciones, (err, response) => {
        // usaremos la invocación a reject para error
        if (err) reject(err); // la invocación a reject provoca la salida de la función sin necesidad de return
        // usaremos la invocación a resolve cuando conseguí terminar la tarea
        resolve(response); // la invocación a resolve provoca también la salida

      });

    });

    return promise;
/*
    const opciones = {
      url: URL_OK,
      metodoHTTP: 'GET'
    }
  
    http(opciones, (err, response) => {
      if (err) return callback(err); // retorna el error
      callback(null, response); // retorna la respuesta "return" no necesario al ser última instrucción
    });  
*/

  }

  // declaración de la método loginGestor
  loginGestor(usuario, password, callback) {

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
      localStorage.setItem('token', response.data.token);
  
      callback(null); // o callback();
    });
  } // fin método loginGestor

  // declaración del método obtenerGestores
  obtenerGestores(callback) {

    const opcionesObtenerGestores = {
      url: URL_GESTORES,
      metodoHTTP: 'GET',
      cabeceras: {
        Authorization: `Basic ${localStorage.getItem('token')}`
      },
      json: true
    }
  
    http(opcionesObtenerGestores, (err, response)=>{
      if(err) return callback(err);
      if(!response.ok) return callback(response.msg);
      // la respuesta que me ha llegado es correcta
      callback(null, response.data);
      });
  
  } // fin obtenerGestores

  // declaración del método obtenerGestorPorIdç
  obtenerGestorPorId(id_gestor, callback) {

    const opcionesObtenerGestor = {
      url: URL_GESTORES+id_gestor,
      metodoHTTP: 'GET',
      cabeceras: {
        Authorization: `Basic ${localStorage.getItem('token')}`
      },
      json: true
    }
  
    http(opcionesObtenerGestor, (err, response)=>{
      if(err) return callback(err);
      if(!response.ok) return callback(response.msg);
      // la respuesta que me ha llegado es correcta
      callback(null, response.data);
      });
  
  } // fin obtenerGestorPorId

}