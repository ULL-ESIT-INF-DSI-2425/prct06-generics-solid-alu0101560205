import { describe, it, expect, beforeEach } from "vitest";
import { Artista } from "../src/ejercicio-2/Artista";
import { BibliotecaMusical } from "../src/ejercicio-2/BibliotecaMusical";
import { Cancion } from "../src/ejercicio-2/Cancion";
import { Disco } from "../src/ejercicio-2/Disco";
import { Discografia } from "../src/ejercicio-2/Discografia";
import { Single } from "../src/ejercicio-2/Single";

describe("Clases de la Biblioteca Musical", () => {
  let cancion1: Cancion;
  let cancion2: Cancion;
  let disco: Disco;
  let discografia: Discografia<Disco>;
  let artista: Artista<Disco>;
  let biblioteca: BibliotecaMusical<Disco>;
  let single: Single;

  beforeEach(() => {
    // Creando canciones
    cancion1 = new Cancion("Song 1", 200, ["Rock"], false, 1000);
    cancion2 = new Cancion("Song 2", 180, ["Pop"], true, 500);

    // Creando un disco con canciones
    disco = new Disco("Album 1", 2023, [cancion1, cancion2]);

    // Creando una discografía con un disco
    discografia = new Discografia<Disco>([disco]);

    // Creando un artista con la discografía
    artista = new Artista<Disco>("Artista 1", 50000, discografia);

    // Creando la biblioteca musical y añadiendo el artista
    biblioteca = new BibliotecaMusical<Disco>();
    biblioteca.añadirArtista(artista);

    // Creando un single
    single = new Single(cancion1);
  });

  describe("Cancion", () => {
    it("Debe obtener el nombre de la canción", () => {
      expect(cancion1.getNombreCancion()).toBe("Song 1");
    });

    it("Debe aumentar el número de reproducciones", () => {
      cancion1.aumentarReproducciones();
      expect(cancion1.getNumReproducciones()).toBe(1001);
    });

    it("Debe retornar si es un single", () => {
      expect(cancion2.isSingleSong()).toBe(true);
    });
  });

  describe("Disco", () => {
    it("Debe retornar el nombre del disco", () => {
      expect(disco.getNombreDisco()).toBe("Album 1");
    });

    it("Debe retornar la cantidad de canciones en el disco", () => {
      expect(disco.getNumeroCancionesDisco()).toBe(2);
    });

    it("Debe calcular la duración total del disco", () => {
      expect(disco.calcularDuracion()).toBe(380);
    });

    it("Debe calcular el total de reproducciones del disco", () => {
      expect(disco.calcularReproducciones()).toBe(1500);
    });
  });

  describe("Discografia", () => {
    it("Debe retornar la colección de discos", () => {
      expect(discografia.getColeccion().length).toBe(1);
    });

    it("Debe agregar un disco a la discografía", () => {
      const nuevoDisco = new Disco("Album 2", 2024, []);
      discografia.agregarElemento(nuevoDisco);
      expect(discografia.getColeccion().length).toBe(2);
    });
  });

  describe("Artista", () => {
    it("Debe retornar el nombre del artista", () => {
      expect(artista.getNombreArtista()).toBe("Artista 1");
    });

    it("Debe retornar el número de oyentes mensuales", () => {
      expect(artista.getNumOyentes()).toBe(50000);
    });

    it("Debe buscar un disco dentro de su discografía", () => {
      expect(artista.buscarDisco("Album 1")).toBe(disco);
    });

    it("Debe retornar undefined si el disco no existe", () => {
      expect(artista.buscarDisco("Album Desconocido")).toBeUndefined();
    });
  });

  describe("BibliotecaMusical", () => {
    it("Debe añadir un artista a la biblioteca", () => {
      expect(biblioteca).toBeDefined();
    });

    it("Debe buscar un artista en la biblioteca", () => {
      biblioteca.buscarArtista("Artista 1"); // Debería imprimir la información del artista
    });

    it("Debe buscar un disco en la biblioteca", () => {
      biblioteca.buscarDisco("Album 1"); // Debería imprimir la información del disco
    });

    it("Debe mostrar la biblioteca correctamente", () => {
      biblioteca.mostrarBiblioteca(); // Debería imprimir la biblioteca en formato de tabla
    });
  });

  describe("Single", () => {
    it("Debe retornar la canción asociada al single", () => {
      expect(single.getCancion()).toBe(cancion1);
    });
  });
});
