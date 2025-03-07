import { Media } from "./Media";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

export class MovieCollection extends BasicStreamableCollection<Media> {
  /**
   * Método para buscar un contenido por su titulo
   * @param title titulo del item a buscar
   * @returns item que se pretendia buscar
   */
  searchByTitle(title: string): Media[] {
    return this.items.filter(movie => movie.title.includes(title));
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(movie => movie.year === year);
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter(movie => movie.genre.includes(genre));
  }
}
