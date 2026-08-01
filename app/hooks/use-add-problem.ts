import { addService } from "../services/add-probelm.service";
import { Problem } from "../types";

export const useAddProblems = () => {
  const addProblemDetails = async ({
    name,
    difficulty,
    pattern,
    repsDone,
    solvedOn,
  }: Problem) => {
    const data = await addService({
      name,
      difficulty,
      solvedOn,
      pattern,
      repsDone,
    });
    return data;
  };

  return { addProblemDetails };
};
