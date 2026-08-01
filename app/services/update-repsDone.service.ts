import { supabase } from "../lib/supabse.client";
import { Problem } from "../types";

export const updateRepetitionsService = async (
  id: string,
  { difficulty, name, pattern, repsDone, solvedOn }: Problem,
) => {
  const { data, error } = await supabase
    .from("problems")
    .update({
      name,
      difficulty,
      pattern,
      reps_done: repsDone,
      solved_on: solvedOn,
    })
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
};
