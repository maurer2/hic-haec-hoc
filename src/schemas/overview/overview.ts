import { z } from "zod";

export const overviewSchema = z.object({
  people: z.string(),
  planets: z.string(),
  films: z.string(),
  species: z.string(),
  vehicles: z.string(),
  starships: z.string(),
});

export type OverviewSchema = z.infer<typeof overviewSchema>;
