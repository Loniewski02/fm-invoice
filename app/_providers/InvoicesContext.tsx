"use client";
import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export const InvoicesContext = createContext(
  {} as {
    isInvoiceFormShown: boolean;
    setIsInvoiceFormShown: Dispatch<SetStateAction<boolean>>;
    isDeleting: boolean;
    setIsDeleting: Dispatch<SetStateAction<boolean>>;
    invoices: [] | Invoice[];
    setInvoices: Dispatch<SetStateAction<[] | Invoice[]>>;
  },
);

export default function InvoicesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isInvoiceFormShown, setIsInvoiceFormShown] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [invoices, setInvoices] = useState<[] | Invoice[]>([]);


  useEffect(() => {
    if (isInvoiceFormShown)
      document.documentElement.classList.add("overflow-hidden");
    else document.documentElement.classList.remove("overflow-hidden");
  }, [isInvoiceFormShown]);

  return (
    <InvoicesContext.Provider
      value={{
        isInvoiceFormShown,
        setIsInvoiceFormShown,
        isDeleting,
        setIsDeleting,
        invoices,
        setInvoices,
      }}
    >
      {children}
    </InvoicesContext.Provider>
  );
}
