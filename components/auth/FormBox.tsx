import { HTMLInputTypeAttribute } from "react";

const FormBox = ({
  input,
}: {
  input: {
    type: HTMLInputTypeAttribute;
    id: string;
    label: string;
    name: string;
    placeholder: string;
  };
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={input.id}
        className="text-[12px] font-light tracking-wide text-Black08 dark:text-PureWhite"
      >
        {input.label}
      </label>
      <input
        id={input.id}
        type={input.type}
        name={input.name}
        className="rounded-md border border-GraylishBlue06 bg-PureWhite p-11 py-3 text-15 dark:border-Blue07 dark:bg-LightBlack12"
        placeholder={input.placeholder}
        required
      />
    </div>
  );
};

export default FormBox;
