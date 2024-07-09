"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { InvoicesContext } from "@/app/_providers/InvoicesContext";

import Button from "@/components/ui/Button";

const DeleteInvoiceModal = ({ invoiceId }: { invoiceId: string }) => {
  const { replace } = useRouter();
  const { setIsDeleting, setInvoices, invoices } = useContext(InvoicesContext);
  const closeModalHandler = () => {
    setIsDeleting(false);
  };

  const deleteInvocieHandler = () => {
    const updatedInvoices = invoices.filter((item) => item.id !== invoiceId);
    setInvoices(updatedInvoices);
    sessionStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    replace("/");
  };

  return (
    <section className="fixed bottom-0 left-0 right-0 top-0 z-50 grid place-items-center p-6">
      <div className="z-10 w-full max-w-[480px] rounded-lg bg-PureWhite p-8 dark:bg-VeryDarkBlue03 md:p-12">
        <h2 className="mb-2 text-2xl font-bold text-Black08 dark:text-PureWhite">
          Confirm Deletion
        </h2>
        <p className="mb-5 text-13 leading-[22px] text-GraylishBlue06 dark:text-VeryLightBlue05">
          Are you sure you want to delete invoice #{invoiceId}? This action
          cannot be undone.
        </p>
        <div className="flex justify-end gap-2">
          <Button
            onClick={closeModalHandler}
            className="bg-White11 text-Blue07 dark:bg-DarkBlue04 dark:text-VeryLightBlue05"
          >
            Cancel
          </Button>
          <Button
            onClick={deleteInvocieHandler}
            className="bg-Red09 text-PureWhite"
          >
            Delete
          </Button>
        </div>
      </div>
      <div
        onClick={closeModalHandler}
        className="absolute bottom-0 left-0 right-0 top-0 bg-[rgba(0,0,0,.5)] backdrop-blur"
      />
    </section>
  );
};

export default DeleteInvoiceModal;
