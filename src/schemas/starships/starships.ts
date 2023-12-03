import { z } from "zod";

export const starshipSchema = z.object({
  name: z.string(),
  model: z.string(),
  manufacturer: z.string(),
  cost_in_credits: z.string(),
  length: z.string(),
  max_atmosphering_speed: z.string(),
  crew: z.string(),
  passengers: z.string(),
  cargo_capacity: z.string(),
  consumables: z.string(),
  vehicle_class: z.string(),
  pilots: z.array(z.unknown()),
  films: z.array(z.string()),
  created: z.string(),
  edited: z.string(),
  url: z.string(),
});

export const starshipsSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.null(),
  results: z.array(starshipSchema),
});

export type StarshipSchema = z.infer<typeof starshipSchema>;
export type StarshipsSchema = z.infer<typeof starshipsSchema>;
