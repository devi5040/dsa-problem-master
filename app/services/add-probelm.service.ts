import { supabase } from "../lib/supabse.client";
import { Problem } from "../types";

export const addService = async ({
  difficulty,
  name,
  pattern,
  repsDone,
  solvedOn,
}: Problem) => {
  console.log("Incoming services");
  const { data, error } = await supabase.from("problems").insert({
    name,
    difficulty,
    pattern,
    solved_on: solvedOn,
    reps_done: Number(repsDone),
  });
  console.log(error, "::::Error");
  if (error) throw error;
  console.log("Outgoing services");
  return data;
};
