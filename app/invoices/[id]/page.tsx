"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { fetchInvoice } from "@/utils/request";

import DetailControls from "@/components/invoices/invoices-details/DetailControls";
import DetailBack from "@/components/invoices/invoices-details/DetailBack";
import DetailFooter from "@/components/invoices/invoices-details/DetailFooter";
import DetailMain from "@/components/invoices/invoices-details/DetailMain";

const InvoiceItem = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState<Invoice | null>();

  useEffect(() => {
    const getInvoice = async () => {
      if (session?.user) {
        try {
          const data = await fetchInvoice(session.user.id, params.id);
          setInvoice(data);
        } catch (error) {
          console.error("Failed to fetch invoices:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    getInvoice();
  }, [session]);

  let content;

  if (loading) {
    content = <p>laoding...</p>;
  } else if (!loading && !invoice) {
    content === <p>error</p>;
  } else if (!loading && invoice) {
    content = (
      <>
        <DetailBack />
        <DetailControls status={invoice.status} />
        <DetailMain data={invoice} />
        <DetailFooter />
      </>
    );
  }

  return content;
};

export default InvoiceItem;
