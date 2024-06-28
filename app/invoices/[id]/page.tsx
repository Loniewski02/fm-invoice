import { DEMO_INVOICES } from "@/utils/constant";

import InvoiceBack from "@/components/invoices/invoices-details/InvoiceBack";
import InvoiceControls from "@/components/invoices/invoices-details/InvoiceControls";
import InvoiceFooter from "@/components/invoices/invoices-details/InvoiceFooter";

const InvoiceItem = ({ params }: { params: { id: string } }) => {
  const itemData = DEMO_INVOICES.filter((item) => item.id === params.id);

  return (
    <>
      <InvoiceBack />
      <InvoiceControls status={itemData[0].status} />
      <InvoiceFooter />
    </>
  );
};

export default InvoiceItem;
