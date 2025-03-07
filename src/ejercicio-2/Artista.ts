import { Disco } from "./Disco";
import { Discografia } from "./Discografia";

/**
 * Clase para representar la informacion de un artista, ya sea grupo o solista
 * @param nombreArtista - nombre del artista o grupo
 * @param numOyentesMensuales - numero de oyentes mensuales
 * @param discografia - discos que posee
 */
export class Artista<T> {
  private nombreArtista: string;
  private numOyentesMensuales: number;
  private discografia: Discografia<T>;

  constructor(nombre: string, oyentes: number, discos: Discografia<T>) {
    this.nombreArtista = nombre;
    this.numOyentesMensuales = oyentes;
    this.discografia = discos;
  }

  getNombreArtista(): string {
    return this.nombreArtista;
  }

  getNumOyentes(): number {
    return this.numOyentesMensuales;
  }

  getDiscografia(): Discografia<T> {
    return this.discografia;
  }

  buscarDisco(nombre: string): T | undefined {
    if (this.discografia.getColeccion()[0] instanceof Disco) {
      return this.discografia.getColeccion().find(
        (disco) => (disco as unknown as Disco).getNombreDisco().toLowerCase() === nombre.toLowerCase()
      );
    }
    return undefined;
  }
}