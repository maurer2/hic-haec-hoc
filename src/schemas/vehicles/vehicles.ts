import { z } from "zod";

export const vehicleSchema = z.object({
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

export const vehiclesSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.null(),
  results: z.array(vehicleSchema),
});

export type VehicleSchema = z.infer<typeof vehicleSchema>;
export type VehiclesSchema = z.infer<typeof vehiclesSchema>;
