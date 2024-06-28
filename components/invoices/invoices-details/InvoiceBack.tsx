import Link from "next/link";

import Wrapper from "@/components/layout/Wrapper";

import ArrowLeft from "@/public/assets/icon-arrow-left.svg";

const InvoiceBack = () => {
  return (
    <section className="px-6 py-8 md:pt-14 lg:pt-[78px]">
      <Wrapper>
        <Link
          href="/invoices"
          className="flex items-start gap-4 text-15 font-bold text-Black08 dark:text-PureWhite"
        >
          <ArrowLeft />
          Go Back
        </Link>
      </Wrapper>
    </section>
  );
};

export default InvoiceBack;
