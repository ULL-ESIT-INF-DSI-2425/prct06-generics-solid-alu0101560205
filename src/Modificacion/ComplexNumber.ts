import { Arithmeticable } from "./ArithmeticableInterface";

/**
 * Clase para representar números complejos
 */
export class ComplexNumber implements Arithmeticable<ComplexNumber> {
  private realPart: number;
  private imaginaryPart: number;
  /**
   * Constructor de la clase COmplexNumber
   * @param real parte real del número complejo
   * @param imaginary parte imaginaria del numero complejo
   */
  constructor(real: number, imaginary: number) {
    this.realPart = real;
    this.imaginaryPart = imaginary;
  }
  /**
   * Método para sumar dos números complejos
   * @param otherNumber número que se pretende sumar al invocador
   */
  add(otherNumber: ComplexNumber): ComplexNumber {
    let totalReal = this.realPart + otherNumber.realPart;
    let totalImagianary = this.imaginaryPart + otherNumber.imaginaryPart;
    let result = new ComplexNumber(totalReal, totalImagianary);
    return result;
  }
  /**
   * Método para restar dos números complejos
   * @param otherNumber número que se le pretende restar al invocador
   */
  substract(otherNumber: ComplexNumber): ComplexNumber {
    let totalReal = this.realPart - otherNumber.realPart;
    let totalImagianary = this.imaginaryPart - otherNumber.imaginaryPart;
    let result = new ComplexNumber(totalReal, totalImagianary);
    return result;
  }
  /**
   * Método para multiplicar dos números complejos
   * @param otherNumber segundo número a multiplicar
   */
  multiply(otherNumber: ComplexNumber): ComplexNumber {
    let totalReal = (this.realPart * otherNumber.realPart) - (this.imaginaryPart * otherNumber.imaginaryPart);
    let totalImagianary = (this.realPart * otherNumber.imaginaryPart) + (this.imaginaryPart * otherNumber.realPart);
    let result = new ComplexNumber(totalReal, totalImagianary);
    return result;
  }
  /**
   * Método para dividir dos números complejos
   * @param otherNumber divisor utilizado en la división
   */
  divide(otherNumber: ComplexNumber): ComplexNumber {
    let denominador = (otherNumber.realPart * otherNumber.realPart) + (otherNumber.imaginaryPart * otherNumber.imaginaryPart);
    let totalReal = ((this.realPart * otherNumber.realPart) + (this.imaginaryPart * otherNumber.imaginaryPart)) / denominador;
    let totalImagianary = ((this.imaginaryPart * otherNumber.realPart) - (this.realPart * otherNumber.imaginaryPart)) / denominador;
    let result = new ComplexNumber(totalReal, totalImagianary);
    return result;
  }
  /**
   * Getter para obtener la parte real del numero complejo
   * @returns parte real del numero complejo
   */
  getReal(): number {
    return this.realPart;
  }
  /**
   * Getter para obtener la parte imaginaria del numero complejo
   * @returns parte imaginaria de un numero complejo
   */
  getImaginary(): number {
    return this.imaginaryPart;
  }
}