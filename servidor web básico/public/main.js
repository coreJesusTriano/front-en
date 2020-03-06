/*
  La estructura habitual de un proyecto será la siguiente:
  - ajax.js  == librería funciones gestión comunicación http
  - banco.js == en el que pondremos las funciones de nuestra lógica de negocio.
  y finalmente
  - main.js == script general que ejecutará nuestra aplicación.
  */
// declaración funciones de utilidad
function mostrarGestoresConsola(gestores) {
  console.log('========\nGESTORES\n========\n');
  for (const gestor of gestores) {
    console.log(`Id: ${gestor.id}`);
    console.log(`Usuario: ${gestor.usuario}`);
    console.log(`Correo: ${gestor.correo}`);
    console.log(`---------`);
  }
}

function mostrarClientesConsola(clientes) {
  console.log('========\nCLIENTES\n========\n');
  for (const cliente of clientes) {
    
    const usuarioGestor = obtenerGestorUsuario(cliente.id_gestor);
  
    console.log(`Id: ${cliente.id}`);
    console.log(`Id gestor: ${cliente.id_gestor}`);
    console.log(`Usuario gestor: ${usuarioGestor}`);
    console.log(`Usuario: ${cliente.usuario}`);
    console.log(`Password: ${cliente.password}`);
    console.log(`Correo: ${cliente.correo}`);
    console.log(`Saldo: ${cliente.saldo}`);
    console.log(`---------`);
  }  
}

const obtenerGestorUsuario = (id_gestor) => {
  for (const gestor of gestores) {
    if(gestor.id === id_gestor) {
      return gestor.usuario;
    }
  }
  return 'desconocido';
};

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

// Invocación a la función obtenerGestores
// obtenerGestores(callback);
obtenerGestores((err, gestores)=>{
  if (err) return console.log(err);
  // tengo el array de gestores
  mostrarGestoresConsola(gestores);
});

// Invocación a la función obtenerGestorPorId
// obtenerGestorPorId(id_gestor, callback);
obtenerGestorPorId('1', (err, gestor)=>{
  if (err) return console.log(err);
  // He obtenido el gestor
  mostrarGestoresConsola([gestor]);
});

