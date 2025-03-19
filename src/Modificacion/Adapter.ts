import { RationalNumber } from "./RationalNumber";
import { ComplexNumber } from "./ComplexNumber";

export class Adapter extends ComplexNumber {
  /**
   * Constructor del adaptador
   * @param rationalNum numero racional que se pretende adaptar a complejo
   * colocando su parte imaginaria a cero
   */
  constructor(rationalNum: RationalNumber) {
    super((rationalNum.getNumerador() / rationalNum.getDenominador()), 0);
  }
  // /**
  //  * Método para sumar racional y un complejo
  //  * @param otherNumber - numero complejo
  //  */
  // add(otherNumber: ComplexNumber): ComplexNumber {
  //   let real = this.getReal() + otherNumber.getReal();
  //   let imag = this.getImaginary() + otherNumber.getImaginary();
  //   let result = new ComplexNumber(real, imag);
  //   return result;
  // }
  // /**
  //  * Método para restar un racional y un complejo
  //  * @param otherNumber - numero complejo
  //  */
  // substract(otherNumber: ComplexNumber): ComplexNumber {
  //   let real = this.getReal() - otherNumber.getReal();
  //   let imag = this.getImaginary() - otherNumber.getImaginary();
  //   let result = new ComplexNumber(real, imag);
  //   return result;
  // }
  // /**
  //  * Metodo para multiplicar un numero racional y un numero complejo
  //  * @param otherNumber - numero complejo
  //  */
  // multiply(otherNumber: ComplexNumber): ComplexNumber {
  //   let real = (this.getReal() * otherNumber.getReal()) - (this.getImaginary() * otherNumber.getImaginary());
  //   let img = (this.getReal() * otherNumber.getImaginary()) + (this.getImaginary() * otherNumber.getReal());
  //   let result = new ComplexNumber(real, img);
  //   return result; 
  // }
  // /**
  //  * Metodo para dividir un racional entre un complejo
  //  * @param otherNumber 
  //  */
  // divide(otherNumber: ComplexNumber): ComplexNumber {
  //   let denominador = (otherNumber.getReal() * otherNumber.getReal()) + (otherNumber.getImaginary() * otherNumber.getImaginary());
  //   let totalReal = ((this.getReal() * otherNumber.getReal()) + (this.getImaginary() * otherNumber.getImaginary())) / denominador;
  //   let totalImagianary = ((this.getImaginary() * otherNumber.getReal()) - (this.getReal() * otherNumber.getImaginary())) / denominador;
  //   let result = new ComplexNumber(totalReal, totalImagianary);
  //   return result;
  // }
}