// Clase base para todas las aves
export abstract class BirdCorrected {
  abstract makeSound(): void;
}

// Interfaz para las aves que pueden volar
export interface CanFly {
  fly(): void;
}

// El gorrión puede volar, por lo que implementa CanFly
export class SparrowCorrected extends BirdCorrected implements CanFly {
  makeSound(): void {
    console.log("Chirp chirp!");
  }

  fly(): void {
    console.log("Flying...");
  }
}

// El pingüino NO implementa CanFly porque no puede volar
export class PenguinCorrected extends BirdCorrected {
  makeSound(): void {
    console.log("Honk honk!");
  }

  swim(): void {
    console.log("Swimming...");
  }
}

// Client code
const sparrow = new SparrowCorrected();
sparrow.fly(); // ✔ Puede volar

const penguin = new PenguinCorrected();
// penguin.fly(); ❌ Error: Penguin no implementa CanFly
penguin.swim(); // ✔ Puede nadar
