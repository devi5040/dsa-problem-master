import { supabase } from "../lib/supabse.client";
import { Problem } from "../types";

export const getProblemsService = async (): Promise<Problem[]> => {
  const { data, error } = await supabase
    .from("problems")
    .select("*")
    .order("solved_on", { ascending: true });

  if (error) throw error;

  const returnData: Problem[] = [];

  data.forEach((item) => {
    returnData.push({
      id: item.id,
      repsDone: item.reps_done,
      solvedOn: item.solved_on,
      difficulty: item.difficulty,
      name: item.name,
      pattern: item.pattern,
    });
  });

  return returnData;
};
