class Pelicula {
    constructor(titulo, director, año) {
        this.titulo = titulo;
        this.director = director;
        this.año = año;
        this.mostrarInformacion = this.mostrarInformacion.bind(this);
    }

    mostrarInformacion() {
        console.log(`Película: ${this.titulo}, Director: ${this.director}, Año: ${this.año}`);
    }
}

class Coleccion {
    constructor() {
        this.peliculas = [];
    }

    agregarPelicula(pelicula) {
        this.peliculas.push(pelicula);
        console.log(`Pelicula "${pelicula.titulo}" agregada a la colección.`);
    }

    buscarPelicula(titulo) {
        return this.peliculas.find(pelicula => pelicula.titulo === titulo);
    }

    actualizarPelicula(titulo, nuevaInformacion) {
        const peliculaIndex = this.peliculas.findIndex(pelicula => pelicula.titulo === titulo);

        if (peliculaIndex !== -1) {
            this.peliculas[peliculaIndex] = { ...this.peliculas[peliculaIndex], ...nuevaInformacion };
            console.log(`Pelicula "${titulo}" actualizada en la colección.`);
        } else {
            console.log('La película no existe en la colección.');
        }
    }

    eliminarPelicula(titulo) {
        this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo !== titulo);
        console.log(`Pelicula "${titulo}" eliminada de la colección.`);
    }

    mostrarColeccion() {
        console.log('Colección de Películas:');
        this.peliculas.forEach(pelicula => pelicula.mostrarInformacion());
    }
}

// Ejemplo de uso
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

