import { DEMO_INVOICES } from "@/utils/constant";

import DetailControls from "@/components/invoices/invoices-details/DetailControls";
import DetailBack from "@/components/invoices/invoices-details/DetailBack";
import DetailFooter from "@/components/invoices/invoices-details/DetailFooter";
import DetailMain from "@/components/invoices/invoices-details/DetailMain";

const InvoiceItem = ({ params }: { params: { id: string } }) => {
  const itemData = DEMO_INVOICES.filter((item) => item.id === params.id);

  return (
    <>
      <DetailBack />
      <DetailControls status={itemData[0].status} />
      <DetailMain data={itemData[0]} />
      <DetailFooter />
    </>
  );
};

export default InvoiceItem;
