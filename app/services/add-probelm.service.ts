import { supabase } from "../lib/supabse.client";
import { Problem } from "../types";

export const addService = async ({
  difficulty,
  name,
  pattern,
  repsDone,
  solvedOn,
}: Problem) => {
  const { data, error } = await supabase.from("problems").insert({
    name,
    difficulty,
    pattern,
    solved_on: solvedOn,
    reps_done: Number(repsDone),
  });
  if (error) throw error;
  return data;
};
