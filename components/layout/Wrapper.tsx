const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className && className} mx-auto w-full max-w-[730px]`}>
      {children}
    </div>
  );
};

export default Wrapper;
