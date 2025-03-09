class Bird {
  fly(): void {
    console.log("Flying...");
  }
}

class Sparrow extends Bird {}

class Penguin extends Bird {}

/**
 * El principio de sustitución de Liskov (LSP) dice que las subclases deben poder 
 * sustituir a su clase base sin afectar el comportamiento esperado del programa.
 * En este caso, Penguin hereda de Bird, lo que significa que debería poder volar, 
 * pero los pingüinos no pueden volar.
 */