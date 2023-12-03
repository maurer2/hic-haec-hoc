import { z } from "zod";

export const filmSchema = z.object({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  characters: z.array(z.string()),
  planets: z.array(z.string()),
  starships: z.array(z.string()),
  vehicles: z.array(z.string()),
  species: z.array(z.string()),
  created: z.string(),
  edited: z.string(),
  url: z.string(),
});

export const filmsSchema = z.object({
  count: z.number(),
  next: z.null(),
  previous: z.null(),
  results: z.array(filmSchema),
});

export type FilmSchema = z.infer<typeof filmSchema>;
export type FilmsSchema = z.infer<typeof filmsSchema>;
