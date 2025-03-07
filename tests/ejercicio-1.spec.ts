import { describe, expect, test, beforeEach } from "vitest";
import { BasicStreamableCollection } from "../src/ejercicio-1/BasicStreamableCollection"
import { DocumentaryCollection } from "../src/ejercicio-1/DocumentaryCollection"
import { Media } from "../src/ejercicio-1/Media"
import { MovieCollection } from "../src/ejercicio-1/MovieCollection"
import { SeriesCollection } from "../src/ejercicio-1/SeriesCollection"
import { Streamable } from "../src/ejercicio-1/Streamable"

// Datos de prueba
const testMovies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi" },
  { title: "Titanic", year: 1997, genre: "Drama" },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi" },
];

const testSeries = [
  { title: "Breaking Bad", year: 2008, genre: "Crime" },
  { title: "Stranger Things", year: 2016, genre: "Sci-Fi" },
];

const testDocumentaries = [
  { title: "Planet Earth", year: 2006, genre: "Nature" },
  { title: "The Last Dance", year: 2020, genre: "Sports" },
];

describe('MovieCollection', () => {
  let movieCollection: MovieCollection;

  beforeEach(() => {
    movieCollection = new MovieCollection([...testMovies]);
  });

  describe('Search functionality', () => {
    test('should search movies by title', () => {
      expect(movieCollection.searchByTitle("Inception")).toEqual([testMovies[0]]);
    });

    test('should search movies by year', () => {
      expect(movieCollection.searchByYear(2010)).toEqual([testMovies[0]]);
    });

    test('should search movies by genre', () => {
      expect(movieCollection.searchByGenre("Sci-Fi")).toEqual([testMovies[0], testMovies[2]]);
    });
  });
});

describe('SeriesCollection', () => {
  let seriesCollection: SeriesCollection;

  beforeEach(() => {
    seriesCollection = new SeriesCollection([...testSeries]);
  });

  describe('Search functionality', () => {
    test('should search series by title', () => {
      expect(seriesCollection.searchByTitle("Breaking Bad")).toEqual([testSeries[0]]);
    });

    test('should search series by year', () => {
      expect(seriesCollection.searchByYear(2016)).toEqual([testSeries[1]]);
    });

    test('should search series by genre', () => {
      expect(seriesCollection.searchByGenre("Sci-Fi")).toEqual([testSeries[1]]);
    });
  });
});

describe('DocumentaryCollection', () => {
  let documentaryCollection: DocumentaryCollection;

  beforeEach(() => {
    documentaryCollection = new DocumentaryCollection([...testDocumentaries]);
  });

  describe('Search functionality', () => {
    test('should search documentaries by title', () => {
      expect(documentaryCollection.searchByTitle("Planet Earth")).toEqual([testDocumentaries[0]]);
    });

    test('should search documentaries by year', () => {
      expect(documentaryCollection.searchByYear(2020)).toEqual([testDocumentaries[1]]);
    });

    test('should search documentaries by genre', () => {
      expect(documentaryCollection.searchByGenre("Nature")).toEqual([testDocumentaries[0]]);
    });
  });
});