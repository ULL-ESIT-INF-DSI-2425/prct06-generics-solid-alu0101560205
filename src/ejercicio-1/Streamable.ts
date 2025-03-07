/**
 * Interfaz generica para especificar propiedades y metodos con
 * los que cuenta una coleccion de emisiones
 */
export interface Streamable<T> {
  searchByTitle(title: string): T[]; // Buscar elementos por titulo
  searchByYear(year: number): T[]; // Buscar elementos por año
  searchByGenre(genre: string): T[]; // Buscar elementos por genero
  addItem(item: T): void; // Añadir elemento a la coleccion
  getAll(): T[]; // Obtener todos los elementos de la colección
}