/**
 * Clase generica que implementa listas de elementos de cualquier tipo y sus funcionalidades
 */
export class Lista<T> {
  private _elementos: T[] = []; // Atributo declarado como lista vacia

  constructor(elementos?: T[]) {
    if (elementos) {
      for (let i = 0; i < elementos.length; i ++) {
        this._elementos[i] = elementos[i];
      }
    }
  }

  get elementos(): T[] {
    return this._elementos;
  }

  get(index: number): T {
    if (index < 0 || index >= this.elementos.length) {
      throw new Error("Índice fuera de rango");
    }
    return this.elementos[index];
  }

  public length(): number {
    let count = 0;
    while (this.elementos[count] !== undefined) {
      count++;
    }
    return count;
  }

  /**
   * Metodo append que permite añadir al final de una lista los elementos de la segunda
   */
  append(otra: Lista<T>): void {
    const len = this.length();
    for (let i = 0; i < otra.length(); i++) {
      this.elementos[len + i] = otra.get(i);
    }
  }


  /**
   * Metodo que dado un numero variable de listas, combina todos sus elementos en una lista
   */
  
  concatenate(...listas: Lista<T>[]): Lista<T> {
    const nueva = new Lista<T>();
    let index = 0;
    // Copiar elementos de la lista actual
    for (let i = 0; i < this.elementos.length; i++) {
      nueva.elementos[index] = this.get(i);
      index++;
    }
    // Copiar elementos de las otras listas
    for (let i = 0; i < listas.length; i++) {
      for (let j = 0; j < listas[i].length(); j++) {
        nueva.elementos[index] = listas[i].get(j);
        index++;
      }
    }
    return nueva;
  }
}