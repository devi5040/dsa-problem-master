import { X } from "lucide-react";
import { useGetProblems } from "../hooks/use-get-problems";
import { useUpdateRepsDone } from "../hooks/use-update-repsDone";
import { Problem } from "../types";
import { useRemoveProblem } from "../hooks/use-remove-problem";

const ProblemDisplayCard = ({ problem }: { problem: Problem }) => {
  const { updateRepetitions } = useUpdateRepsDone();
  const { mutate } = useGetProblems();
  const { removeProblem } = useRemoveProblem();

  const daysArray = [2, 7, 14, 28];

  const dueDate = new Date(problem.solvedOn);
  dueDate.setDate(dueDate.getDate() + daysArray[problem.repsDone - 1]);
  const date = dueDate.getDate();
  const month = dueDate.getMonth() + 1;
  const year = dueDate.getFullYear();

  const updateRepsCountHandler = async () => {
    let count = problem.repsDone;
    count++;

    await updateRepetitions(problem.id ?? "1", {
      difficulty: problem.difficulty,
      name: problem.name,
      pattern: problem.pattern,
      repsDone: count,
      solvedOn: problem.solvedOn,
    });

    await mutate();
  };

  const problemRemoveHandler = async () => {
    await removeProblem(problem.id ?? "1");
    await mutate();
  };

  return (
    <div
      className={`bg-[#111826] w-2/3 flex justify-between items-center px-12 py-5 shadow-md rounded-md border-l-2 ${problem.repsDone === 5 ? "border-[#39D353]" : "border-[#1F2937]"}`}
    >
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-md font-semibold text-[#c9c9c9] font-mono">
          {problem.name}
        </h2>
        <div className="py-0.5 flex gap-3 items-center">
          <p className="px-3 py-0.5 bg-[#0B0F16] border border-[#1F2937] rounded-md">
            <span className="text-sm font-mono">{problem.pattern}</span>
          </p>
          <p className="text-sm font-mono text-[#a9a9a9]">
            {problem.difficulty}
          </p>
          <p className="text-sm font-mono text-[#a9a9a9]">
            - {Number(problem.repsDone)}/5 reps complete
          </p>
          {Number(problem.repsDone) < 5 && (
            <p className="text-sm font-mono text-[#a9a9a9]">
              - due on: {`${date}-${month}-${year}`}
            </p>
          )}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index < problem.repsDone ? "bg-[#39d353]" : "bg-[#1F2937]"}`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        {problem.repsDone < 5 ? (
          <div className="flex justify-between items-center gap-5">
            <button className="px-3 py-1 rounded-md bg-[#1F2937] border-[#1f2937] shadow-md text-[#a9a9a9] text-xs font-mono font-medium">
              Upcoming
            </button>
            <button
              onClick={updateRepsCountHandler}
              className="px-3 py-1 rounded-md bg-[#39D3531F] border-[#39d353] shadow-md cursor-pointer text-[#39d353] text-xs font-mono font-medium"
            >
              mark reviewed
            </button>
          </div>
        ) : (
          <button className="px-3 py-1 rounded-md bg-[#39D3531F] border-[#39d353] shadow-md text-[#39d353] text-xs font-mono font-medium">
            Mastered
          </button>
        )}
        <X
          className="text-md cursor-pointer text-[#797979]"
          onClick={problemRemoveHandler}
        />
      </div>
    </div>
  );
};

export default ProblemDisplayCard;
