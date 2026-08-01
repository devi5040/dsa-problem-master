import React from "react";

const FormInput = ({
  title,
  id,
  placeholder,
  changeHandler,
}: {
  title: string;
  id: string;
  placeholder: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <label className="text-sm font-light text-[#696969]">{title}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        required
        className="border py-1 px-2 rounded-md border-[#696969] outline-none text-[#898989] "
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default FormInput;
