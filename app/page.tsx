"use client";

import AddSolutionForm from "./components/AddSolutionForm";
import ProblemDisplayCard from "./components/ProblemDisplayCard";
import { useGetProblems } from "./hooks/use-get-problems";

export default function Home() {
  const { data } = useGetProblems();

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="font-mono p-5 text-center">
        <h2 className="font-bold text-xl text-[#898989]">Pattern Master</h2>
        <p className="font-medium text-[#898989] my-2">
          spaced repetition tracker — 5 reps: day 0, +2, +7, +14, +28
        </p>
      </div>
      <div className="bg-[#111826] w-2/3 px-12 py-5 border border-[#494949] shadow-md rounded-md">
        <h2 className="font-medium font-mono text-[#797979]">Log a Solve</h2>
        <AddSolutionForm />
      </div>
      <div className="py-5 w-full flex justify-center items-center flex-col gap-5">
        {data.map((d) => (
          <ProblemDisplayCard problem={d} key={d.id} />
        ))}
      </div>
    </main>
  );
}
