const Button = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="button"
      className={`${className && className} rounded-[24px] px-6 py-4 text-15 font-bold first-letter:uppercase`}
    >
      {children}
    </button>
  );
};

export default Button;
