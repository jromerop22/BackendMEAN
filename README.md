# BackendMEAN
Funcionalidad para Prueba de conocimientos Angular, NodeJS y MongoDB (Backend)

# Prueba de conocimientos Angular, NodeJS y MongoDB  
## Frontend
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Backend
This project was generated with [node.js]npm init

## Development server angular
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server node.js
Run `ng serve` for a dev server. Navigate to `http://localhost:3100/`. The app will automatically reload if you change any of the source files.

## Enunciado 1
Diseñe una página web en la que sea posible reportar las horas extras del personal, la página debe contener al menos los siguientes campos: 
1. Documento 2. Nombres y apellidos 3. Fecha inicio 4. Fecha fin 5. Horario inicio de turno. 6. Horario fin de turno. 7. Horario Inicio hora extra 8. Horario fin Hora extra. 9. Motivo hora extra 
* Tenga en cuenta que la página debe diseñarse y ejecutarse sobre el framework Angular. 

## Enunciado 2
Muestre en una tabla dentro de la página web la información de los campos anteriormente mencionados, debe ser posible agregar varios registros de horas y verlos dentro de esta tabla. 

## Enunciado 3
Cree una segunda tabla en la que inserte datos solicitándolos a un servidor, el siguiente link es un servidor desde el cual se puede consumir la información de ejemplo: https://jsonplaceholder.typicode.com  
Obtenga dicha información de la API construida en NodeJS y plásmela en una tabla dentro de la página inicial. 
For production environments...


## Routing Angular

Formulario para enviar datos desde del frontend al backend
![Form](https://github.com/jromerop22/FrontendMean/blob/master/imagenes/FormReportes.jpg)
```sh
http://localhost:4200/reporte
```

Formulario para enviar datos de https://jsonplaceholder.typicode.com  al backend ademas de proporcionar una vista de esta información paginada
![json](https://github.com/jromerop22/FrontendMean/blob/master/imagenes/JsonVista.jpg)
```sh
http://localhost:4200/user
```

Vista table de datos del enunciado #1
![vista](https://github.com/jromerop22/FrontendMean/blob/master/imagenes/ListarReportes.jpg)
```sh
http://localhost:4200/listar
```
## Routing Node.js
#### Usuario  
Sirve para crear un documento de https://jsonplaceholder.typicode.com 
```sh
POST
http://localhost:3001/user/one
```

Recibe una matriz y guarda elemento por elemento
```sh
POST
http://localhost:3001/user
```

Lista toda la informacion guardada en mongo
```sh
GET
http://localhost:3001/user
```
#### Reporte

Sirve para crear un documento en mongo
```sh
POST
http://localhost:3001/report
```
Lista toda la informacion guardada en mongo
```sh
GET
http://localhost:3001/report
```

## Docker
Crear entorno de trabajo local si dispone de docker
```sh
docker-compose up -d
```
