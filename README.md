# Proyecto App Banco

En este repositorio iremos construyendo el front-end de la aplicación banco, cuyo back-end está realizado en Java.

## Entidades

### Gestor

* id : int(11)
* usuario : char(20)
* password : char(64)
* correo : char(50)

### Cliente

* id : int(11)
* id_gestor : int(11) --> id tabla gestor
* usuario : char(20)
* password : char(64)
* correo : char(50)
* saldo : double

### Mensaje

* id : int(11)
* id_origen : int(11) --> id tabla gestor
* id_destino : int(11) --> id tabla gestor
* texto : char(140)
* fecha : datetime

### Transferencia

* id : int(11)
* id_ordenante : int(11) --> id tabla cliente
* id_beneficiario : int(11) --> id tabla cliente
* importe : double
* concepto : char(40)
* fecha : datetime