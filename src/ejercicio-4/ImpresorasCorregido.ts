interface Printable {
  print(): void
  
}

interface Scannable {
  scan(): void
}

class PrinterCorrected implements Printable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void { }
}

class ScannerCorrrected implements Scannable {
  print(): void { }

  scan(): void {
    console.log('Scanning...')
  }
}

class PrinterScannerCorrected implements Printable, Scannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
  }
}

// Client code
const printer_ = new PrinterCorrected();
// Printing
printer.print();

const scanner_ = new ScannerCorrrected();
// Scanning
scanner.scan();

const printerScanner_ = new PrinterScannerCorrected();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();
