import InvoiceForm from "./InvoiceForm";

import LeftArrow from "@/public/assets/icon-arrow-left.svg";

const NewInvoice = () => {
  return (
    <section className="absolute left-0 right-0 top-[72px] bg-PureWhite px-6 py-8 dark:bg-LightBlack12">
      <button
        aria-label="go back"
        className="mb-6 flex items-center gap-4 text-15 font-bold text-Black08 dark:text-PureWhite"
      >
        <LeftArrow /> Go Back
      </button>
      <h2 className="mb-6 text-2xl font-bold -tracking-[.5px] text-Black08 dark:text-PureWhite">
        New Invoice
      </h2>
      <InvoiceForm />
      <div className="hidden md:block" />
    </section>
  );
};

export default NewInvoice;
