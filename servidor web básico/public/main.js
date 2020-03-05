/*
Ejercicio proyecto final 2: implementar el método login para los gestores (http://localhost:8085/login/gestor/) y almacenar el token devuelto en una variable.
*/

function EjercicioLogin() {
  const opcionesLogin = {
    url: 'http://localhost:8085/login/gestor/',
    metodoHTTP: 'POST',
    cabeceras: {
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    json: true, // Para que lo devuelva como objeto JSON
    body: 'usuario=gestor1&password=gestor1'
  };


  http(opcionesLogin, (err, response)=>{
    if(err) return console.log(err);
    if(!response.ok) return console.log(response.msg);
    
    // guardo token en una variable
    const token = response.data.token;
    
    const opcionesObtenerGestores = {
      url: 'http://localhost:8085/gestores/',
      metodoHTTP: 'GET',
      cabeceras: {
        Authorization: `Basic ${token}`
      },
      json: true
    }
    
    http(opcionesObtenerGestores, (err, response)=>{
      if(err) return console.log(err);
      console.log(response);
      if(!response.ok) return console.log(response.msg);
      const gestores = response.data;
      console.log(gestores);
      
      console.log('GESTORES');

      for (const gestor of gestores) {
        console.log(`Id: ${gestor.id}`);
        console.log(`Usuario: ${gestor.usuario}`);
        console.log(`Password: ${gestor.password}`);
        console.log(`Correo: ${gestor.correo}`);
        console.log(`---------`);
      }

    });
  });

}

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
