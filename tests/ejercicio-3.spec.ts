import { describe, it, expect, vi, beforeEach } from "vitest";
import * as fs from "fs";
import { FileManager } from "../src/ejercicio-3/GestorCorregido";
import { FileStorage } from "../src/ejercicio-3/GestorCorregido";

// Mocks para evitar manipulación de archivos reales
vi.mock("fs");

describe("FileStorage", () => {
  let fileStorage: FileStorage;
  const testFilePath = "test.txt";

  beforeEach(() => {
    fileStorage = new FileStorage(testFilePath);
    vi.resetAllMocks();
  });

  it("Debe leer el contenido de un archivo", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue("Contenido de prueba");

    const result = fileStorage.read();
    expect(result).toBe("Contenido de prueba");
    expect(fs.readFileSync).toHaveBeenCalledWith(testFilePath, "utf-8");
  });

  it("Debe manejar errores al leer el archivo", () => {
    vi.spyOn(fs, "readFileSync").mockImplementation(() => {
      throw new Error("Error de lectura");
    });

    const result = fileStorage.read();
    expect(result).toBe("");
    expect(fs.readFileSync).toHaveBeenCalledWith(testFilePath, "utf-8");
  });

  it("Debe escribir contenido en un archivo", () => {
    const writeSpy = vi.spyOn(fs, "writeFileSync").mockImplementation(() => {});

    fileStorage.write("Nuevo contenido");
    expect(writeSpy).toHaveBeenCalledWith(testFilePath, "Nuevo contenido", "utf-8");
  });

  it("Debe manejar errores al escribir en el archivo", () => {
    vi.spyOn(fs, "writeFileSync").mockImplementation(() => {
      throw new Error("Error de escritura");
    });

    expect(() => fileStorage.write("Contenido")).not.toThrow();
  });
});

describe("FileManager", () => {
  let fileStorageMock: FileStorage;
  let fileManager: FileManager;

  beforeEach(() => {
    fileStorageMock = new FileStorage("mock.txt");
    fileManager = new FileManager(fileStorageMock);
  });

  it("Debe obtener el contenido utilizando FileStorage", () => {
    vi.spyOn(fileStorageMock, "read").mockReturnValue("Datos de prueba");

    expect(fileManager.getContent()).toBe("Datos de prueba");
    expect(fileStorageMock.read).toHaveBeenCalled();
  });

  it("Debe guardar contenido utilizando FileStorage", () => {
    const writeSpy = vi.spyOn(fileStorageMock, "write").mockImplementation(() => {});

    fileManager.saveContent("Nuevo contenido");
    expect(writeSpy).toHaveBeenCalledWith("Nuevo contenido");
  });
});
