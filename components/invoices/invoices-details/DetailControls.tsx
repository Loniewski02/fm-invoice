import { useContext } from "react";
import { InvoicesContext } from "@/app/_providers/InvoicesContext";

import Wrapper from "@/components/layout/Wrapper";
import Status from "../Status";
import Button from "@/components/ui/Button";

const BUTTONS = ["edit", "delete", "mark as paid"];

const DetailControls = ({ status }: { status: string }) => {
  const { setIsInvoiceFormShown, setIsDeleting } = useContext(InvoicesContext);

  const invoiceFormHandler = () => {
    setIsInvoiceFormShown(true);
  };

  const deleteInvoiceHandler = () => {
    setIsDeleting(true);
  };

  return (
    <section className="px-6 pb-3">
      <Wrapper className="rounded-lg bg-PureWhite p-6 dark:bg-VeryDarkBlue03 md:flex md:items-center md:justify-between md:px-8 md:py-5">
        <div className="flex items-center justify-between gap-5 md:w-max">
          <p className="text-13 text-Blue07 dark:text-VeryLightBlue05">
            Status
          </p>
          <Status status={status} />
        </div>
        <div className="hidden gap-2 md:flex">
          {BUTTONS.map((button, i) => (
            <Button
              key={i}
              onClick={() => {
                if (button === "edit") invoiceFormHandler();
                if (button === "delete") deleteInvoiceHandler();
              }}
              className={`${button === "edit" && "bg-DarkBlue04"} ${button === "delete" && "bg-Red09"} ${button === "mark as paid" && "bg-Violet01"} text-PureWhite`}
            >
              {button}
            </Button>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default DetailControls;
