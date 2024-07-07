import {
  BILL_FROM_INPUTS,
  BILL_TO_INPUTS,
  ITEM_INPUTS,
  PAYMENTS_INPUTS,
} from "@/utils/constant";

import Button from "@/components/ui/Button";
import FormBox from "@/components/ui/FormBox";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-2 gap-6">{children}</div>;
};

const InvoiceForm = () => {
  return (
    <form action="" className="flex flex-col gap-10">
      <Card>
        <h3 className="text-15 font-bold text-Violet01">Bill From</h3>
        {BILL_FROM_INPUTS.map((input, i) => (
          <FormBox
            key={input.id}
            input={input}
            className={`${i === 0 && "col-span-2"} ${i === 3 && "col-span-2"}`}
          />
        ))}
      </Card>
      <Card>
        <h3 className="text-15 font-bold text-Violet01">Bill To</h3>
        {BILL_TO_INPUTS.map((input, i) => (
          <FormBox
            key={input.id}
            input={input}
            className={`${i === 0 && "col-span-2"} ${i === 1 && "col-span-2"} ${i === 2 && "col-span-2"} ${i === 5 && "col-span-2"}`}
          />
        ))}
      </Card>
      <Card>
        {PAYMENTS_INPUTS.map((input) => (
          <FormBox key={input.id} input={input} className="col-span-2" />
        ))}
      </Card>
      <div className="mt-8 grid grid-cols-4 gap-x-4 gap-y-5">
        <h3 className="text-[18px] font-bold text-Blue07">Item List</h3>
        {ITEM_INPUTS.map((input, i) => (
          <FormBox
            key={input.id}
            input={input}
            className={`${i === 0 && "col-span-4"}`}
          />
        ))}
        <Button className="col-span-4 row-start-4 mt-7 bg-White11 text-Blue07 dark:bg-DarkBlue04 dark:text-GraylishBlue06">
          + Add New Item
        </Button>
      </div>
    </form>
  );
};

export default InvoiceForm;
