import { z } from "zod";

export const planetSchema = z.object({
  name: z.string(),
  rotation_period: z.string(),
  orbital_period: z.string(),
  diameter: z.string(),
  climate: z.string(),
  gravity: z.string(),
  terrain: z.string(),
  surface_water: z.string(),
  population: z.string(),
  residents: z.array(z.string()),
  films: z.array(z.string()),
  created: z.string(),
  edited: z.string(),
  url: z.string(),
});

export const planetsSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.null(),
  results: z.array(planetSchema),
});

export type PlanetSchema = z.infer<typeof planetSchema>;
export type PlanetsSchema = z.infer<typeof planetsSchema>;
