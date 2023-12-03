import { z } from "zod";

export const speciesSingularSchema = z.object({
  name: z.string(),
  classification: z.string(),
  designation: z.string(),
  average_height: z.string(),
  skin_colors: z.string(),
  hair_colors: z.string(),
  eye_colors: z.string(),
  average_lifespan: z.string(),
  homeworld: z.string(),
  language: z.string(),
  people: z.array(z.string()),
  films: z.array(z.string()),
  created: z.string(),
  edited: z.string(),
  url: z.string(),
});

export const speciesSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.null(),
  results: z.array(speciesSingularSchema),
});

export type SpeciesSingularSchema = z.infer<typeof speciesSingularSchema>;
export type SpeciesSchema = z.infer<typeof speciesSchema>;
