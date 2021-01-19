# Felinos

- `Nombre:` Boris Vargas Paucara
- `Celular:` 60514138

## Desarrollo de la aplicacion web

Creamos el proyecto con el Framework Angular
> ng new felinos

Ingresamos al proyecto
> cd felinos

Abrimos el proyecto con el editor de codigo VSCODE
> code .

Instalamos dependencias Bootstrap4 para que la aplicacion web sea responsiva
> npm install bootstrap jquery @popperjs/core

Correr de manera local y abre el navegador por defecto
> ng serve --open

### Creación de componentes

Vamos a crear el primer componente que sera el de Buscar felinos
> ng generate component components/buscadorFelinos

Vamos a crear el segundo componente que sera el de Fotos felinas
> ng generate component components/fotosFelinas

### Creación de servicios

Vamos a crear el primer servicio para consumir la API de Buscador felinos
> ng generate service services/felinos

Vamos a crear el segundo servicio para consumir la API de Fotos felinas
> ng generate service services/fotosFelinas

## La aplicación web esta en el siguiente enlace

<https://borisvargas.github.io/felinos>

# Ejecutar la apliacion Web en su sistema

Debe tener instalado Nodejs, npm y angular 9+.

```
cd felinos
npm install
ng serve -o
```

# Abrir la aplicacion web en su sistema

Debe tener un navegador, se dirige a `cd felinos/docs` y abre el archivo index.html con el navegador web
