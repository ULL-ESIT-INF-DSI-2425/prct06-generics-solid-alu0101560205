import { describe, it, expect, vi } from "vitest";
import { PrinterCorrected, ScannerCorrrected, PrinterScannerCorrected } from "../src/ejercicio-4/ImpresorasCorregido";

describe("PrinterCorrected", () => {
  it("Debe imprimir correctamente", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const printer = new PrinterCorrected();

    printer.print();

    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
  });

  it("Debe tener un método scan que no haga nada", () => {
    const printer = new PrinterCorrected();
    expect(printer.scan()).toBeUndefined();
  });
});

describe("ScannerCorrrected", () => {
  it("Debe escanear correctamente", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const scanner = new ScannerCorrrected();

    scanner.scan();

    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
  });

  it("Debe tener un método print que no haga nada", () => {
    const scanner = new ScannerCorrrected();
    expect(scanner.print()).toBeUndefined();
  });
});

describe("PrinterScannerCorrected", () => {
  it("Debe imprimir correctamente", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const printerScanner = new PrinterScannerCorrected();

    printerScanner.print();

    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
  });

  it("Debe escanear correctamente", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const printerScanner = new PrinterScannerCorrected();

    printerScanner.scan();

    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
  });
});
