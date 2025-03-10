export interface Printable {
  print(): void
  
}

export interface Scannable {
  scan(): void
}

export class PrinterCorrected implements Printable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void { }
}

export class ScannerCorrrected implements Scannable {
  print(): void { }

  scan(): void {
    console.log('Scanning...')
  }
}

export class PrinterScannerCorrected implements Printable, Scannable {
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
printer_.print();

const scanner_ = new ScannerCorrrected();
// Scanning
scanner_.scan();

const printerScanner_ = new PrinterScannerCorrected();
// Printing
printerScanner_.print();
// Scanning
printerScanner_.scan();
