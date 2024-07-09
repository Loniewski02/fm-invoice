"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState, useContext } from "react";

import { InvoicesContext } from "@/app/_providers/InvoicesContext";
import { fetchInvoice } from "@/utils/request";

import DetailControls from "@/components/invoices/invoices-details/DetailControls";
import DetailBack from "@/components/invoices/invoices-details/DetailBack";
import DetailFooter from "@/components/invoices/invoices-details/DetailFooter";
import DetailMain from "@/components/invoices/invoices-details/DetailMain";
import InvoiceFormSection from "@/components/invoices/invoices-form-section/InvoiceFormSection";
import DeleteInvoiceModal from "@/components/invoices/invoices-details/DeleteInvoiceModal";

const InvoiceItem = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState<Invoice | null>();
  const { isInvoiceFormShown, isDeleting } = useContext(InvoicesContext);

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
        {isInvoiceFormShown && (
          <InvoiceFormSection>
            Edit <span className="text-Violet01">#</span>
            {invoice.id}
          </InvoiceFormSection>
        )}
        {isDeleting && <DeleteInvoiceModal invoiceId={invoice.id} />}
      </>
    );
  }

  return content;
};

export default InvoiceItem;
