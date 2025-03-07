import { Cancion } from "./Cancion";

/**
 * Clase que representa a un disco de la biblioteca musical
 * @param nombreDisco - nombre del disco
 * @param cancionesIncluidas - Canciones incluidas en el disco
 * @param anoPublicacion - año en que se publico el disco
 */
export class Disco {
  private nombreDisco: string;
  private anoPublicacion: number;
  private cancionesIncluidas: Cancion[];

  constructor(nombre: string, año: number, canciones: Cancion[]) {
    this.nombreDisco = nombre;
    this.anoPublicacion = año;
    this.cancionesIncluidas = canciones;
  }

  getNombreDisco(): string {
    return this.nombreDisco;
  }

  getAnoPublicacion(): number {
    return this.anoPublicacion;
  }

  getCancionesDisco(): Cancion[] {
    return this.cancionesIncluidas;
  }

  getNumeroCancionesDisco(): number {
    return this.cancionesIncluidas.length;
  }

  calcularDuracion(): number {
    return this.cancionesIncluidas.reduce((total, cancion) => total + cancion.getDuracionCancion(), 0);
  }

  calcularReproducciones(): number {
    return this.cancionesIncluidas.reduce((total, cancion) => total + cancion.getNumReproducciones(), 0);
  }
}