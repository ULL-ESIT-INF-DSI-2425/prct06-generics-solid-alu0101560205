import { Cancion } from "./Cancion";

export class Single {
  constructor(private cancion: Cancion) {}

  getCancion(): Cancion {
    return this.cancion;
  }
}