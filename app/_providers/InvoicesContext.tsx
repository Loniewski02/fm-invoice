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
  },
);

export default function InvoicesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isInvoiceFormShown, setIsInvoiceFormShown] = useState(false);
  //   const [] = useState();
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
      }}
    >
      {children}
    </InvoicesContext.Provider>
  );
}
