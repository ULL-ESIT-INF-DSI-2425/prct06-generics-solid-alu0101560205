interface PrintableScannable {
  print(): void
  scan(): void
}

class Printer implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void { }
}

class Scanner implements PrintableScannable {
  print(): void { }

  scan(): void {
    console.log('Scanning...')
  }
}

class PrinterScanner implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
  }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();

/**
 * Problemas con los principios SOLID:
 * - La interfaz PrintableScannable obliga a las clases Printer y Scanner a implementar métodos que no necesitan, ya
 *   que printer tiene que implementar scan, aunque no lo usa, y scanner tiene que implementar print, y tampoco lo usa.
 */