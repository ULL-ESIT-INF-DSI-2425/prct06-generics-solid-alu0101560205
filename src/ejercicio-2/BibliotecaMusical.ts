import { Artista } from "./Artista";
import { Disco } from "./Disco";
// import { Cancion } from "./Cancion";

export class BibliotecaMusical<T> {
  private artistas: Artista<T>[];

  constructor() {
    this.artistas = []; // Inicializamos la lista
  }

  añadirArtista(artista: Artista<T>) {
    this.artistas.push(artista);
  }

  mostrarBiblioteca(): void {
    console.table(
      this.artistas.map((artista) => ({
        'Nombre': artista.getNombreArtista(),
        'Oyentes Mensuales': artista.getNumOyentes(),
        'Cantidad de Discos/Singles': artista.getDiscografia().getColeccion().length,
      }))
    );
  }

  buscarArtista(nombre: string): void {
    const artista = this.artistas.find((a) => a.getNombreArtista().toLowerCase() === nombre.toLowerCase());
    if (!artista) {
      console.log(`Artista "${nombre}" no encontrado.`);
      return;
    }
    console.table([
      {
        Nombre: artista.getNombreArtista(),
        'Oyentes Mensuales': artista.getNumOyentes(),
        'Cantidad de Discos/Singles': artista.getDiscografia().getColeccion().length,
      },
    ]);
  }

  buscarDisco(nombre: string): void {
    let discoEncontrado: T | undefined;
    this.artistas.forEach((artista) => {
      const disco = artista.buscarDisco(nombre);
      if (disco) discoEncontrado = disco;
    });

    if (!discoEncontrado || !(discoEncontrado instanceof Disco)) {
      console.log(`Disco "${nombre}" no encontrado.`);
      return;
    }

    console.table([
      {
        Nombre: discoEncontrado.getNombreDisco(),
        Año: discoEncontrado.getAnoPublicacion(),
        'Número de Canciones': discoEncontrado.getNumeroCancionesDisco(),
        'Duración Total (s)': discoEncontrado.calcularReproducciones(),
      },
    ]);
  }
}