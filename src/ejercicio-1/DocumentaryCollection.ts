import { Media } from "./Media";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

export class DocumentaryCollection extends BasicStreamableCollection<Media> {
  searchByTitle(title: string): Media[] {
    return this.items.filter(doc => doc.title.includes(title)); // Filtra documentales por título
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(doc => doc.year === year); // Filtra documentales por año
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter(doc => doc.genre.includes(genre)); // Filtra documentales por género
  }
}