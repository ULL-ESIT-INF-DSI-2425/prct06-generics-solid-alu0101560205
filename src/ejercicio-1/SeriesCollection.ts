import { Media } from "./Media";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

export class SeriesCollection extends BasicStreamableCollection<Media> {
  searchByTitle(title: string): Media[] {
    return this.items.filter(series => series.title.includes(title)); // Filtra series por título
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(series => series.year === year); // Filtra series por año
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter(series => series.genre.includes(genre)); // Filtra series por género
  }
}