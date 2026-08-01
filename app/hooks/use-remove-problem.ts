import { deleteProblem } from "../services/remove-problem.service";

export const useRemoveProblem = () => {
  const removeProblem = async (id: string) => {
    await deleteProblem(id);
  };

  return { removeProblem };
};
