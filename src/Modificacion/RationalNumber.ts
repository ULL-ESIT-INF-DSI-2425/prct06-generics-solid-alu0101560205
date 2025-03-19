import { Arithmeticable } from "./ArithmeticableInterface";

/**
 * CLase para representar los números racionales
 */
export class RationalNumber implements Arithmeticable<RationalNumber> {
  private numerador: number;
  private denominador: number;
  /**
   * Constructor de la clase RationalNumber
   * @param num - numerador del numero racional
   * @param den - denominador del numero racional
   */
  constructor(num: number, den: number) {
    if (den === 0) {
      throw new Error("Error: el denominador no puede ser cero");
    }
    this.numerador = num;
    this.denominador = den;
  }
  /**
   * Método para sumar dos números racionales
   * @param otherNumber - segundo racional a sumar
   */
  add(otherNumber: RationalNumber): RationalNumber {
    let num = (this.numerador * otherNumber.denominador) + (this.denominador * otherNumber.numerador);
    let den = this.denominador * otherNumber.denominador;
    let result = new RationalNumber(num, den);
    return result;
  }
  /**
   * Método para restar dos números racionales
   * @param otherNumber número que se pretende restar al primero
   */
  substract(otherNumber: RationalNumber): RationalNumber {
    let num = (this.numerador * otherNumber.denominador) - (this.denominador * otherNumber.numerador);
    let den = this.denominador * otherNumber.denominador;
    let result = new RationalNumber(num, den);
    return result;
  }
  /**
   * Método para multiplicar dos numeros racionales
   * @param otherNumber - segundo racional a multiplicar
   */
  multiply(otherNumber: RationalNumber): RationalNumber {
    let num = this.numerador * otherNumber.numerador;
    let den = this.denominador * otherNumber.denominador;
    let result = new RationalNumber(num, den);
    return result;
  }
  /**
   * Método para dividir dos números racionales
   * @param otherNumber - divisor de la división
   */
  divide(otherNumber: RationalNumber): RationalNumber {
    let num = this.numerador * otherNumber.denominador; 
    let den = this.denominador * otherNumber.numerador;
    let result = new RationalNumber(num, den);
    return result;
  }
  /**
   * Getter para obtener el numerador
   * @returns numerador del racional
   */
  getNumerador(): number {
    return this.numerador;
  }
  /**
   * Getter para obtener el denominador
   * @return denominador del racional
   */
  getDenominador(): number {
    return this.denominador;
  }

}