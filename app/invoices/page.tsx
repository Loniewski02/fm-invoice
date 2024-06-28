import Link from "next/link";

import { DEMO_INVOICES } from "@/utils/constant";

import Wrapper from "@/components/layout/Wrapper";
import Empty from "@/components/invoices/Empty";
import InvoicesControls from "@/components/invoices/InvoicesControls";

import ArrowRight from "@/public/assets/icon-arrow-right.svg";
import Status from "@/components/invoices/Status";

const InvoicesPage = () => {
  return (
    <>
      <InvoicesControls />
      {DEMO_INVOICES.length === 0 && <Empty />}
      {DEMO_INVOICES.length !== 0 && (
        <section className="px-6 pb-8 md:py-6 lg:py-8">
          <Wrapper className="flex flex-col gap-4">
            {DEMO_INVOICES.map((item) => (
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
      )}
    </>
  );
};

export default InvoicesPage;
