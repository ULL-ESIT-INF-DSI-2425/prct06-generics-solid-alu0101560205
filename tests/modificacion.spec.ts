import { describe, expect, test, beforeEach } from "vitest";
import { ComplexNumber } from "../src/Modificacion/ComplexNumber"
import { Arithmeticable } from "../src/Modificacion/ArithmeticableInterface";
import { ArithmeticableCollection } from "../src/Modificacion/ArithmeticableCollection"
import { groupCollapsed } from "console";
import { RationalNumber } from "../src/Modificacion/RationalNumber"
import { Adapter } from "../src/Modificacion/Adapter"
import { copyFile } from "fs";

describe("Pruebas de ComplexNumbers", () => {
  test("Instanciar elemento de la clase ComplexNumber", () => {
    const complexNumber = new ComplexNumber(2, 3);
    expect(complexNumber).toBeInstanceOf(ComplexNumber);
  });

  test("Debe sumar dos numeros complejos", () => {
    const complexNumber = new ComplexNumber(2, 3);
    const other = new ComplexNumber(1, 4);
    const result = complexNumber.add(other);
    let resultAdd = new ComplexNumber(3, 7);
    expect(result).toEqual(resultAdd);
  });

  test("Debe sumar dos numeros complejos", () => {
    const complexNumber = new ComplexNumber(6, 2);
    const other = new ComplexNumber(3, 4);
    const result = complexNumber.add(other);
    let resultAdd = new ComplexNumber(9, 6);
    expect(result).toEqual(resultAdd);
  });

  test("Debe restar dos numeros complejos", () => {
    const complexNumber = new ComplexNumber(2, 3);
    const other = new ComplexNumber(1, 4);
    const result = complexNumber.substract(other);
    let resultSub = new ComplexNumber(1, -1);
    expect(result).toEqual(resultSub);
  });

  test("Debe multiplicar dos numeros complejos", () => {
    const complexNumber = new ComplexNumber(2, 3);
    const other = new ComplexNumber(1, 4);
    const result = complexNumber.multiply(other);
    let resultMul = new ComplexNumber(-10, 11)
    expect(result).toEqual(resultMul);
  });

  test("Debe dividir dos numeros complejos", () => {
    const complexNumber = new ComplexNumber(2, 4);
    const other = new ComplexNumber(1, 3);
    const result = complexNumber.divide(other);
    let resultDiv = new ComplexNumber(14/10, -2/10);
    expect(result).toEqual(resultDiv);
  });

  test("Debe dividir dos numeros complejos", () => {
    const complexNumber = new ComplexNumber(3, 2);
    const other = new ComplexNumber(5, 1);
    const result = complexNumber.divide(other);
    let resultDiv = new ComplexNumber(17/26, 7/26);
    expect(result).toEqual(resultDiv);
  });
});

describe("Pruebas de la clase ArithmeticableCollection", () => {
  // test("Crear añadir objeto a la colección", () => {
  //   const colection = new ArithmeticableCollection<ComplexNumber>;
  //   const complexNumber = new ComplexNumber(1, 2);
  //   const prueba = colection.addArithmeticable(complexNumber);
  //   expect(prueba).toBe([1,2]);
  // });

  test("Pruebas buscar objeto", () => {
    const colection = new ArithmeticableCollection<ComplexNumber>;
    const complexNumber = new ComplexNumber(1, 2);
    const prueba = colection.getArithmeticable(complexNumber);
    expect(prueba).toBe(undefined);
  });
});

describe("Pruebas de la clase RationalNumbers", () => {
  test("Instanciar un numero racional", () => {
    const rational = new RationalNumber(1, 2);
    expect(rational).toBeInstanceOf(RationalNumber);
  });

  test("Debe sumar dos numeros racionales", () => {
    const rational = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(3, 4);
    const result = new RationalNumber(10, 8);
    expect(rational.add(rational2)).toStrictEqual(result);
  });

  test("Debe restar dos numeros racionales", () => {
    const rational = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(3, 4);
    const result = new RationalNumber(-2, 8);
    expect(rational.substract(rational2)).toStrictEqual(result);
  });

  test("Debe multiplicar dos numeros complejos", () => {
    const rational = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(3, 4);
    const result = new RationalNumber(3, 8);
    expect(rational.multiply(rational2)).toStrictEqual(result);
  });

  test("Debe dividir dos numeros complejos", () => {
    const rational = new RationalNumber(1, 2);
    const rational2 = new RationalNumber(3, 4);
    const result = new RationalNumber(4, 6);
    expect(rational.divide(rational2)).toStrictEqual(result);
  })
});

describe("Test de la clase adapter", () => {
  test("Suma de complejo y racional", () => {
    let rat = new RationalNumber(1, 2);
    let adapt = new Adapter(rat);
    let complex = new ComplexNumber(2, 4);
    let result = new ComplexNumber(2.5, 4);
    expect(adapt.add(complex)).toStrictEqual(result);
  });

  test("Resta de complejo y racional", () => {
    let rat = new RationalNumber(1, 2);
    let adapt = new Adapter(rat);
    let complex = new ComplexNumber(2, 4);
    let result = new ComplexNumber(-1.5, -4);
    expect(adapt.substract(complex)).toStrictEqual(result);
  });

  test("Multiplicacion de complejo y racional", () => {
    let rat = new RationalNumber(1, 2);
    let adapt = new Adapter(rat);
    let complex = new ComplexNumber(2, 4);
    let result = new ComplexNumber(1, 2);
    expect(adapt.multiply(complex)).toStrictEqual(result);
  });

  test("Dividir complejo y racional", () => {
    let rat = new RationalNumber(1, 2);
    let adapt = new Adapter(rat);
    let complex = new ComplexNumber(2, 4);
    let result = new ComplexNumber(0.05, -0.1);
    expect(adapt.divide(complex)).toStrictEqual(result);
  });
});