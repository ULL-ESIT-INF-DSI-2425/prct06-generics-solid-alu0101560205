import { Arithmeticable } from "./ArithmeticableInterface"

export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private collection: T[];
  /**
   * Constructor de la clase
   * @param collect lista de elementos aritméticos, por defecto vacía
   */
  constructor(collect: T[] = []) {
    this.collection = collect;
  }
  /**
   * Método para añadir un elemento a la colección
   * @param item elemento que se pretende añadir a la colección
   */
  addArithmeticable(item: T): void {
    this.collection.push(item);
  }
  /**
   * Método para obtener un elemento de la colección
   * @param item elemento que se pretende obtener de la colección
   * @returns retorna el elemento si lo encuentra en la colección, undefined en caso de que no lo encuentre
   */
  getArithmeticable(item: T): T | undefined {
    this.collection.forEach((obj) => {
      if (obj === item) {
        return obj;
      }
    });
    return undefined;
  }
  /**
   * Método para obtener el tamaño de la colección
   * @returns tamaño actual de la colección 
   */
  getNumberOfArithmeticables(): number {
    return this.collection.length;
  }
}