import * as fs from "fs";

// Interfaz que define la funcionalidad de almacenamiento
interface Storage {
  read(): string;
  write(data: string): void;
}

// Implementación concreta para archivos
class FileStorage implements Storage {
  constructor(private filePath: string) {}

  read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }

  write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

// Clase separada para gestionar archivos con independencia del tipo de almacenamiento
class FileManager {
  constructor(private storage: Storage) {}

  getContent(): string {
    return this.storage.read();
  }

  saveContent(data: string): void {
    this.storage.write(data);
  }
}

// Uso del código con inyección de dependencias
const fileStorage = new FileStorage("example.txt");
const fileManager = new FileManager(fileStorage);

// Leer contenido
const currentContent = fileManager.getContent();
console.log("Current content:", currentContent);

// Escribir contenido
const newData = "This is new content to be written into the file.";
fileManager.saveContent(newData);

// Leer contenido actualizado
const updatedContent = fileManager.getContent();
console.log("Updated content:", updatedContent);
