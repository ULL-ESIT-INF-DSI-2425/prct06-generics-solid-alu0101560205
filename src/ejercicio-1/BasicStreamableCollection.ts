import { Streamable } from "./Streamable";

/**
 * Clase abstracta genérica que implementa Streamable
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[]; // Lista de elementos almacenados en la colección

  constructor(v: T[]) {
    this.items = v;
  }
  /**
   * Metodo para añadir un item a la coleccion
   * @param item Item que se pretende añadir a la coleccion
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Obtener la lista de items almacenados
   * @returns items almaenados
   */
  getAll(): T[] {
    return this.items;
  }

  // Métodos abstractos que serán implementados en las subclases
  abstract searchByTitle(title: string): T[];
  abstract searchByYear(year: number): T[];
  abstract searchByGenre(genre: string): T[];
}