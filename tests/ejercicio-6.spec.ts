import { describe, it, expect, vi } from "vitest";
import { SparrowCorrected, PenguinCorrected } from "../src/ejercicio-6/BirdsCorrected";

describe("SparrowCorrected", () => {
  it("Debe hacer el sonido 'Chirp chirp!'", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const sparrow = new SparrowCorrected();

    sparrow.makeSound();

    expect(consoleSpy).toHaveBeenCalledWith("Chirp chirp!");
  });

  it("Debe poder volar", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const sparrow = new SparrowCorrected();

    sparrow.fly();

    expect(consoleSpy).toHaveBeenCalledWith("Flying...");
  });
});

describe("PenguinCorrected", () => {
  it("Debe hacer el sonido 'Honk honk!'", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const penguin = new PenguinCorrected();

    penguin.makeSound();

    expect(consoleSpy).toHaveBeenCalledWith("Honk honk!");
  });

  it("Debe poder nadar", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const penguin = new PenguinCorrected();

    penguin.swim();

    expect(consoleSpy).toHaveBeenCalledWith("Swimming...");
  });
});
