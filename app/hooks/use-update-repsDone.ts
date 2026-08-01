import { updateRepetitionsService } from "../services/update-repsDone.service";
import { Problem } from "../types";

export const useUpdateRepsDone = () => {
  const updateRepetitions = async (
    id: string,
    { difficulty, name, pattern, repsDone, solvedOn }: Problem,
  ) => {
    const data = await updateRepetitionsService(id, {
      name,
      difficulty,
      pattern,
      repsDone,
      solvedOn,
    });
    return data;
  };

  return { updateRepetitions };
};
