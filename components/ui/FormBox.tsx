const FormBox = ({
  input,
  className,
}: {
  input: {
    type: React.HTMLInputTypeAttribute;
    id: string;
    label: string;
    name: string;
    placeholder: string;
    default?: any;
  };
  className?: string;
}) => {
  return (
    <div className={`${className && className} flex flex-col gap-2`}>
      <label
        htmlFor={input.id}
        className="text-13 tracking-wide text-Blue07 dark:text-VeryLightBlue05"
      >
        {input.label}
      </label>
      <input
        id={input.id}
        type={input.type}
        name={input.name}
        className="rounded-[4px] border border-VeryLightBlue05 bg-PureWhite py-3 pl-5 pr-4 text-15 dark:border-DarkBlue04 dark:bg-VeryDarkBlue03"
        placeholder={input.placeholder}
        // required
      />
    </div>
  );
};

export default FormBox;
