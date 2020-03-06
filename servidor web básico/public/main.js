/*
  La estructura habitual de un proyecto será la siguiente:
  - ajax.js  == librería funciones gestión comunicación http
  - banco.js == en el que pondremos las funciones de nuestra lógica de negocio.
  y finalmente
  - main.js == script general que ejecutará nuestra aplicación.
 */

// COMIENZO EJECUCIÓN SCRIPT


// Invocación a la función ok
// ok(callback);
ok((err, datos)=>{
  if (err) return console.log(err);
  console.log(datos);
});

// Invocación a la función loginGestor
// loginGestor(usuario, password, callback);
const usuario = 'gestor1';
const password = 'gestor1';
loginGestor(usuario, password, (err)=>{
  if(err) {
    // no estoy autenticado
    return console.log(err);
  }
  // estoy autenticado
  console.log('Estoy autenticado');
});
