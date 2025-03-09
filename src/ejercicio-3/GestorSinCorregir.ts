import * as fs from "fs";

class FileManager {
  constructor(private filePath: string) {}

  // Reads file
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }

  // Writes file
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

// Client code
const fileManager = new FileManager("example.txt");

// Reading content
const currentContent = fileManager.readFile();
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

// Updating content
const updatedContent = fileManager.readFile();
console.log("Updated content:", updatedContent);

/**
 * Violaciones de los principios SOLID:
 * - La clase FileManager maneja tanto la lectura/escritura como la gestion de errores
 * - Si queremos cambiar el mecanismo de lectura/escritura (por ejemplo, usar una base de datos en lugar de archivos), debemos modificar la clase FileManager.
 * - FileManager depende directamente del módulo fs, lo que hace difícil cambiar la implementación.
 */