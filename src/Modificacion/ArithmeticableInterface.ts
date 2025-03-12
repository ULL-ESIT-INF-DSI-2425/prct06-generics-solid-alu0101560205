/**
 * Interfaz para definir operaciones con tipo de datos genéricos
 * add - sumar dos datos
 * substract - restar dos datos
 * multiply - multiplicar dos datos
 * divide - dividir dos datos
 */
export interface Arithmeticable<T> {
  add(otherNumber: T): T;
  substract(otherNumber: T): T;
  multiply(otherNumber: T): T;
  divide(otherNumber: T): T;
}