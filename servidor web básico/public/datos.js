function obtenerGestoresDePrueba() {
// objetos gestores
const gestor1 = {
  id: 1,
  usuario: 'gestor1',
  password: 'gestor1',
  correo: 'gestor1@mail.com'
};
const gestor2 = {
  id: 2,
  usuario: 'gestor2',
  password: 'gestor2',
  correo: 'gestor2@mail.com'
};
const gestor3 = {
  id: 3,
  usuario: 'gestor3',
  password: 'gestor3',
  correo: 'gestor3@mail.com'
};

// agrego los gestores al array de gestores
const gestores = [];
gestores.push(gestor1, gestor2, gestor3);
// retorno el array
return gestores;
// podría haberlo hecho así:
// return [gestor1, gestor2, gestor3];
// En cuyo caso no son necesarias las lineas 23 y 24 del código.
}

function obtenerClientesDePrueba() {
/*
También puedo hacerlo directamente así,
retornando un array de los objetos clientes
*/
  return[
    {
      id: 1,
      id_gestor: 2,
      usuario: 'cliente1',
      password: 'cliente1',
      correo: 'cliente1@gmail.com',
      saldo: 3000
    },
    {
      id: 2,
      id_gestor: 1,
      usuario: 'cliente2',
      password: 'cliente2',
      correo: 'cliente2@gmail.com',
      saldo: 5000
    },
    {
      id: 3,
      id_gestor: 3,
      usuario: 'client31',
      password: 'cliente3',
      correo: 'cliente3@gmail.com',
      saldo: 1000
    }
  ]
}

const obtenerMensajesDePrueba = ()=>{
  // returno el array de mensajes
  return[
    {
      id: 1,
      id_origen: 1,
      id_destino: 2,
      texto: 'hola',
      fecha: new Date()
    },
    {
      id: 2,
      id_origen: 2,
      id_destino: 1,
      texto: 'adiós',
      fecha: new Date()
    }
  ];
};

const obtenerTransferenciasDePrueba = ()=>{
  return[];
};

function mostrarGestoresConsola(gestores) {
  console.log('========\nGESTORES\n========\n');
  for (const gestor of gestores) {
    console.log(`Id: ${gestor.id}`);
    console.log(`Usuario: ${gestor.usuario}`);
    console.log(`Password: ${gestor.password}`);
    console.log(`Correo: ${gestor.correo}`);
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

/*
 // de array JavaScript a array JSON (string)
 const myArrayJsonGestores = JSON.stringify(gestores, null, 3);
 console.log(myArrayJsonGestores);
 
// de objeto JavaScript a objeto JSON (string)
 const myJsonGestor = JSON.stringify(gestor1);
 console.log(myJsonGestor);
 

// de array JSON (string) a array JavaScript
 const arrayGestores = JSON.parse(myArrayJsonGestores);
 console.log(arrayGestores);
 
// de objeto JSON (string) a objeto JavaScript
 const objGestor = JSON.parse(myJsonGestor);
 console.log(objGestor); 
 */

function ejercicioOk(div) {
  const opciones = {
    url: 'http://localhost:8085/ok',
    metodoHTTP: 'GET'
  }

  // const callback = () => {};
  // function http(opciones, callback);
  http(opciones, (err, response) => {
    // Si hay error termina mostrando error en consola
    if (err) return console.log(err);

    // Si la ejecución ha llegado a esta línea es que la petición se ha efectuado correctamente
    console.log(response);
    //document.write(`El servidor responde : ${response}`);
    const mensa = `El servidor responde : <br> <p>${response}</p>`;
    document.getElementById('msg').innerHTML = mensa;
  });
}

function ExeEjercicioOk() {
  let mensage = 'Iniciando ejecución ...';
  document.getElementById('msg').innerHTML = mensage;
  //document.write('Iniciando ejecución ...');
  console.log('Iniciando ejecución ...');
  mensage = 'accediendo al servicio web ...';
  setTimeout(() => {
    //document.write('accediendo al servicio web ...\n');
    console.log('accediendo al servicio web ...');
    document.getElementById('msg').innerHTML = mensage;
    ('msg').innerHTML = mensage;
  }, 2000);
  setTimeout(() => {
    ejercicioOk('msg');
  }, 3000);
}