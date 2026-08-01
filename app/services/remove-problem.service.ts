import { supabase } from "../lib/supabse.client";

export const deleteProblem = async (id: string) => {
  await supabase.from("problems").delete().eq("id", id);
};
