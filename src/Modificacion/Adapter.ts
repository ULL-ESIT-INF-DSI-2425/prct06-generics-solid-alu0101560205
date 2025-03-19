import { RationalNumber } from "./RationalNumber";
import { ComplexNumber } from "./ComplexNumber";

class Adapter extends ComplexNumber {
  /**
   * Constructor del adaptador
   * @param rationalNum numero racional que se pretende adaptar a complejo
   * colocando su parte imaginaria a cero
   */
  constructor(rationalNum: RationalNumber) {
    super((rationalNum.getNumerador() / rationalNum.getDenominador()), 0);
  }
}