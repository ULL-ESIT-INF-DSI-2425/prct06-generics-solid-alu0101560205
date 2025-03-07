export class Discografia<T> {
  private coleccion: T[];
  
  constructor(coleccion: T[]) {
    this.coleccion = coleccion;
  }

  getColeccion(): T[] {
    return this.coleccion;
  }

  agregarElemento(elemento: T): void {
    this.coleccion.push(elemento);
  }
}