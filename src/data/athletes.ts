import { michaelJordan } from "./michael-jordan";
import { lebronJames } from "./lebron-james";
import { kobeBryant } from "./kobe-bryant";
import { stephenCurry } from "./stephen-curry";
import { cristianoRonaldo } from "./cristiano-ronaldo";

export const athletes = [
  michaelJordan,
  lebronJames,
  kobeBryant,
  stephenCurry,
  cristianoRonaldo,
] as const;

export type AthleteSlug = (typeof athletes)[number]["slug"];

export function getAthleteBySlug(slug: string) {
  return athletes.find((a) => a.slug === slug);
}
