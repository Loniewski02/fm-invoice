"use client";
import { useFormStatus } from "react-dom";

const Submit = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`${className && className} col-span-2 rounded-md bg-Violet01 px-6 py-3 text-15 font-bold text-PureWhite transition hover:bg-LightViolet02 active:scale-95 `}
      disabled={pending}
      aria-disabled={pending}
    >
      {children}
    </button>
  );
};

export default Submit;
