import { describe, test, expect } from "vitest";
import { Lista } from "../src/ListaGenerica/listaGenerica"; // Ajusta la ruta según tu estructura

describe("Tests para Lista<T> - append y concatenate", () => {
  test("append añade los elementos de otra lista al final", () => {
    const lista1 = new Lista<number>([1, 2, 3]);
    const lista2 = new Lista<number>([4, 5]);

    lista1.append(lista2);

    expect(lista1.length()).toBe(5);
    expect(lista1.get(3)).toBe(4);
    expect(lista1.get(4)).toBe(5);
  });

  test("concatenate combina múltiples listas en una nueva", () => {
    const lista1 = new Lista<string>(["a", "b"]);
    const lista2 = new Lista<string>(["c"]);
    const lista3 = new Lista<string>(["d", "e"]);

    const resultado = lista1.concatenate(lista2, lista3);

    expect(resultado.length()).toBe(5);
    expect(resultado.get(0)).toBe("a");
    expect(resultado.get(1)).toBe("b");
    expect(resultado.get(2)).toBe("c");
    expect(resultado.get(3)).toBe("d");
    expect(resultado.get(4)).toBe("e");

    // Verifica que las listas originales no se modifican
    expect(lista1.length()).toBe(2);
    expect(lista2.length()).toBe(1);
    expect(lista3.length()).toBe(2);
  });
});
