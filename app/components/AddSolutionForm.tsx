"use client";

import React, { useState } from "react";
import { useAddProblems } from "../hooks/use-add-problem";
import AddButton from "./AddButton";
import FormInput from "./FormInput";
import { useGetProblems } from "../hooks/use-get-problems";

const AddSolutionForm = () => {
  const [name, setName] = useState<string>("");
  const [pattern, setPattern] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [solvedOn, setSolvedOn] = useState<string>("");

  const { addProblemDetails } = useAddProblems();
  const { mutate } = useGetProblems();

  const submitHandler = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    await addProblemDetails({
      name,
      difficulty,
      pattern,
      repsDone: 1,
      solvedOn,
    });
    await mutate();
    form.reset();
  };

  return (
    <form
      id="addForm"
      className="flex justify-between items-center py-3"
      onSubmit={submitHandler}
    >
      <FormInput
        title="problem name"
        id="fName"
        placeholder="e.g. Merge k Sorted Lists"
        changeHandler={(e) => setName(e.target.value)}
      />
      <FormInput
        title="pattern"
        id="fPattern"
        placeholder="e.g. heap"
        changeHandler={(e) => setPattern(e.target.value)}
      />
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-light text-[#696969]">difficulty</label>
        <select
          className="border border-[#696969] px-2 py-1.5 rounded-md text-[#898989]"
          id="fDiff"
          onChange={(e) => setDifficulty(e.target.value)}
          defaultValue="easy"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-light text-[#696969]">solved on</label>
        <input
          type="date"
          className="border border-[#696969] px-2 py-1.5 rounded-md text-[#898989]"
          id="fDate"
          required
          onChange={(e) => setSolvedOn(e.target.value)}
        />
      </div>
      <AddButton />
    </form>
  );
};

export default AddSolutionForm;
