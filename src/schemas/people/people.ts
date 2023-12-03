import { z } from "zod";

export const personSchema = z.object({
  name: z.string(),
  height: z.string(),
  mass: z.string(),
  hair_color: z.string(),
  skin_color: z.string(),
  eye_color: z.string(),
  birth_year: z.string(),
  gender: z.string(),
  homeworld: z.string(),
  films: z.array(z.string()),
  species: z.array(z.unknown()),
  vehicles: z.array(z.string()),
  starships: z.array(z.string()),
  created: z.string(),
  edited: z.string(),
  url: z.string(),
});

export const peopleSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.null(),
  results: z.array(personSchema),
});

export type PersonSchema = z.infer<typeof personSchema>;
export type PeopleSchema = z.infer<typeof peopleSchema>;
