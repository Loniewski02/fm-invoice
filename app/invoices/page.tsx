"use client";
import Link from "next/link";

import Wrapper from "@/components/layout/Wrapper";
import Empty from "@/components/invoices/Empty";
import InvoicesControls from "@/components/invoices/InvoicesControls";

import ArrowRight from "@/public/assets/icon-arrow-right.svg";
import Status from "@/components/invoices/Status";
import { fetchInvoices } from "@/utils/request";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const InvoicesPage = () => {
  const { data: session } = useSession();
  const [invoices, setInvoices] = useState<Invoice[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInvoices = async () => {
      if (session?.user) {
        try {
          const data = await fetchInvoices(session.user.id);
          setInvoices(data);
        } catch (error) {
          console.error("Failed to fetch invoices:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    getInvoices();
  }, [session]);

  let content;

  if (loading) {
    content = <p>loading</p>;
  } else if (!loading && invoices.length === 0) {
    content = <Empty />;
  } else {
    content = (
      <section className="px-6 pb-8 md:py-6 lg:py-8">
        <Wrapper className="flex flex-col gap-4">
          {invoices.map((item) => (
            <Link
              href={`/invoices/${item.id}`}
              key={item.id}
              className="relative flex min-h-[134px] items-center justify-between rounded-lg bg-PureWhite px-6 py-7 shadow-sm dark:bg-VeryDarkBlue03 md:min-h-fit md:py-4 md:pl-8 md:pr-5"
            >
              <div className="flex flex-col items-start self-stretch text-13 text-Blue07 dark:text-VeryLightBlue05 md:flex-row md:items-center md:gap-11 md:self-baseline">
                <span className="text-15">
                  #
                  <span className="font-bold text-Black08 dark:text-PureWhite">
                    {item.id}
                  </span>
                </span>
                <span className="mt-2 md:m-0">Due {item.paymentDue}</span>
                <span className="absolute right-6 top-7 dark:text-PureWhite md:static">
                  {item.clientName}
                </span>
              </div>
              <div className="flex flex-col justify-end gap-10  self-stretch md:flex-row md:items-center md:self-baseline">
                <span className="absolute bottom-7 left-6 text-15 font-bold -tracking-[.25px] text-Black08 dark:text-PureWhite md:static">
                  $ {item.total.toFixed(2)}
                </span>
                <Status status={item.status} />
                <ArrowRight className="-ml-5 hidden md:block" />
              </div>
            </Link>
          ))}
        </Wrapper>
      </section>
    );
  }

  return (
    <>
      <InvoicesControls />
      {content}
    </>
  );
};

export default InvoicesPage;
