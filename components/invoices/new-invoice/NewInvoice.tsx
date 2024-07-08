"use client";
import { useContext } from "react";

import InvoiceForm from "./InvoiceForm";

import LeftArrow from "@/public/assets/icon-arrow-left.svg";
import { InvoicesContext } from "@/app/_providers/InvoicesContext";

const NewInvoice = () => {
  const { setIsInvoiceFormShown } = useContext(InvoicesContext);
  return (
    <section className="scroll absolute bottom-0 left-0 right-0 top-[72px] z-50 overflow-x-hidden bg-PureWhite px-6 py-8 dark:bg-LightBlack12 md:top-20 md:max-w-[612px] md:px-10 md:py-14 lg:left-[103px] lg:top-0 lg:px-14">
      <button
        onClick={() => {
          setIsInvoiceFormShown(false);
        }}
        aria-label="go back"
        className="mb-6 flex items-center gap-4 text-15 font-bold text-Black08 dark:text-PureWhite"
      >
        <LeftArrow /> Go Back
      </button>
      <h2 className="mb-6 text-2xl font-bold -tracking-[.5px] text-Black08 dark:text-PureWhite">
        New Invoice
      </h2>
      <InvoiceForm />
      <div
        onClick={() => {
          setIsInvoiceFormShown(false);
        }}
        className="fixed bottom-0 left-[612px] right-0 top-20 z-40 hidden bg-[rgba(0,0,0,.5)] backdrop-blur md:block lg:left-[715px] lg:top-0"
      />
    </section>
  );
};

export default NewInvoice;
