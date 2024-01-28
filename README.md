# Documentación para la Aplicación de Gestión de Películas

Este documento proporciona una descripción y documentación básica para la aplicación de gestión de películas desarrollada en JavaScript con Node.js.

## Versión de Node.js

La aplicación está desarrollada utilizando Node.js v18.18.1. Asegúrate de tener esta versión de Node.js instalada en tu sistema.

## Estructura del Proyecto

- **app.js**: El archivo principal que contiene las clases `Pelicula` y `Coleccion`, así como ejemplos de uso y operaciones CRUD.

## Clase Pelicula

La clase `Pelicula` se utiliza para representar una película con sus atributos principales.

### Atributos

- `titulo`: El título de la película.
- `director`: El director de la película.
- `año`: El año de lanzamiento de la película.

### Métodos

- `mostrarInformacion()`: Muestra la información de la película en la consola.

## Clase Coleccion

La clase `Coleccion` gestiona una colección de películas y proporciona operaciones CRUD.

### Atributos

- `peliculas`: Un array que almacena las instancias de la clase `Pelicula`.

### Métodos

- `agregarPelicula(pelicula)`: Agrega una película a la colección.
- `buscarPelicula(titulo)`: Busca una película por su título.
- `actualizarPelicula(titulo, nuevaInformacion)`: Actualiza la información de una película.
- `eliminarPelicula(titulo)`: Elimina una película de la colección.
- `mostrarColeccion()`: Muestra todas las películas de la colección en la consola.

## Ejemplo de Uso

El código incluye un ejemplo de uso que crea una colección de películas, agrega varias películas de Star Wars, realiza operaciones CRUD y muestra los resultados en la consola.

```javascript
// ... (código de ejemplo)
const miColeccion = new Coleccion();

const pelicula1 = new Pelicula('Star Wars: Episodio I - La amenaza fantasma', 'George Lucas', 1999);
const pelicula2 = new Pelicula('Star Wars: Episodio II - El ataque de los clones', 'George Lucas', 2002);
const pelicula3 = new Pelicula('Star Wars: Episodio III - La venganza de los Sith', 'George Lucas', 2005);
const pelicula4 = new Pelicula('Star Wars: Episodio IV - Una nueva esperanza', 'George Lucas', 1977);
const pelicula5 = new Pelicula('Star Wars: Episodio V - El imperio contraataca', 'Irvin Kershner', 1980);
const pelicula6 = new Pelicula('Star Wars: Episodio VI - El retorno del Jedi', 'Richard Marquand', 1983);

miColeccion.agregarPelicula(pelicula1);
miColeccion.agregarPelicula(pelicula2);
miColeccion.agregarPelicula(pelicula3);
miColeccion.agregarPelicula(pelicula4);
miColeccion.agregarPelicula(pelicula5);
miColeccion.agregarPelicula(pelicula6);

miColeccion.mostrarColeccion();

// Actualizar información de una película
const buscarTitulo = 'Star Wars: Episodio I - La amenaza fantasma';
const peliculaEncontrada = miColeccion.buscarPelicula(buscarTitulo);

if (peliculaEncontrada) {
    console.log(`Película encontrada: ${buscarTitulo}`);
    peliculaEncontrada.mostrarInformacion();

    const nuevaInformacion = { director: 'Updated Director', año: 2022 };
    miColeccion.actualizarPelicula(buscarTitulo, nuevaInformacion);

    console.log(`Después de la actualización:`);
    miColeccion.mostrarColeccion();
} else {
    console.log(`Película no encontrada: ${buscarTitulo}`);
}

// Eliminar una película de la colección
const tituloAEliminar = 'Star Wars: Episodio II - El ataque de los clones';
miColeccion.eliminarPelicula(tituloAEliminar);
console.log(`Después de eliminar "${tituloAEliminar}":`);
miColeccion.mostrarColeccion();
```

## Ejecutar la Aplicación

Para ejecutar la aplicación, utiliza el siguiente comando:

```bash
npm start
```