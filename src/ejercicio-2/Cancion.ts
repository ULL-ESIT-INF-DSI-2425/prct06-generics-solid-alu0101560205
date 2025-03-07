
/**
 * Clase para representar una cancion perteneciente a un disco
 * @param nombreCancion - nombre de la cancion
 * @param duracionCancion - duración de la cancion
 * @param genero - lista de generos de la cancion
 * @param single - determina si la cancion fue lanzada como single o no
 * @param numReproducciones - numero de reproducciones que tiene la cancion
 */
export class Cancion {
  private nombreCancion: string;
  private duracionCancion: number;
  private generos: string[];
  private single: boolean;
  private numReproducciones: number;

  constructor(nombre: string, duracion: number, gen: string[], isSingle: boolean, reprod: number) {
    this.nombreCancion = nombre;
    this.duracionCancion = duracion;
    this. generos = gen;
    this.single = isSingle;
    this.numReproducciones = reprod;
  }
  /**
   * Metodo para obtener el nombre de la cancion
   * @returns nombre de la cancion
   */
  getNombreCancion(): string {
    return this.nombreCancion;
  }
  /**
   * Asignar un nuevo nombre a la cancion
   * @param nuevoNombre - nombre que se pretende asignar
   */
  setNombreCancion(nuevoNombre: string) {
    this.nombreCancion = nuevoNombre;
  }
  /**
   * Obtener duracion de la cancion
   * @returns duracion de la cancion
   */
  getDuracionCancion(): number {
    return this.duracionCancion;
  }

  getGenerosCancion(): string[] {
    return this.generos;
  }

  isSingleSong(): boolean {
    return this.single;
  }

  getNumReproducciones(): number {
    return this.numReproducciones;
  }

  aumentarReproducciones(): void {
    this.numReproducciones++;
  }


}