import Wrapper from "@/components/layout/Wrapper";
import Status from "../Status";

const BUTTONS = ["edit", "delete", "mark as paid"];

const InvoiceControls = ({ status }: { status: string }) => {
  return (
    <section className="px-6">
      <Wrapper className="rounded-lg bg-PureWhite p-6 dark:bg-VeryDarkBlue03 md:flex md:items-center md:justify-between md:px-8 md:py-5">
        <div className="flex items-center justify-between gap-5 md:w-max">
          <p className="text-13 text-Blue07 dark:text-VeryLightBlue05">
            Status
          </p>
          <Status status={status} />
        </div>
        <div className="hidden gap-2 md:flex">
          {BUTTONS.map((button, i) => (
            <button
              key={i}
              className={`${button === "edit" && "bg-DarkBlue04"} ${button === "delete" && "bg-Red09"} ${button === "mark as paid" && "bg-Violet01"} rounded-[24px] px-6 py-4 text-15 font-bold text-PureWhite first-letter:uppercase`}
            >
              {button}
            </button>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default InvoiceControls;
