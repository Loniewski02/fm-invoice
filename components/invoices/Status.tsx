const Status = ({ status }: { status: string }) => {
  return (
    <div
      className={`${status === "pending" && "bg-[#ff91001c]"} ${status === "paid" && "bg-[#33D69F1c]"} ${status === "draft" && "bg-[#373B531c] dark:bg-[#373b5350]"} flex w-[104px] items-center  justify-center gap-2 rounded-md py-3 `}
    >
      <span
        className={`${status === "pending" && "bg-[#ff8f00]"} ${status === "paid" && "bg-[#33D69F]"} ${status === "draft" && "bg-[#373B53] dark:bg-PureWhite"} block h-2 w-2 rounded-full`}
      />
      <span
        className={`${status === "pending" && "text-[#ff8f00]"} ${status === "paid" && "text-[#33D69F]"} ${status === "draft" && "text-[#373B53] dark:text-PureWhite"} text-15 font-bold first-letter:uppercase`}
      >
        {status}
      </span>
    </div>
  );
};

export default Status;
