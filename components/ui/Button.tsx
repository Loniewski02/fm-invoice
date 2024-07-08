const Button = ({
  className,
  children,
  onClick,
}: {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className && className} rounded-[24px] px-6 py-4 text-15 font-bold first-letter:uppercase`}
    >
      {children}
    </button>
  );
};

export default Button;
