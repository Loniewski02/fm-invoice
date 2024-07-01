import Wrapper from "@/components/layout/Wrapper";

const Block = ({
  title,
  desc,
  className,
}: {
  title: string | null;
  desc: string | {};
  className?: string;
}) => {
  return (
    <div
      className={`${className && className} ${typeof desc === "object" ? "gap-1" : "gap-3"} flex flex-col`}
    >
      {title && desc && (
        <p className="text-13 text-Blue07 dark:text-VeryLightBlue05">{title}</p>
      )}
      {typeof desc === "string" && desc && (
        <p className="text-15 font-bold text-Black08 dark:text-PureWhite">
          {desc}
        </p>
      )}
      {typeof desc === "object" &&
        Object.values(desc).map((item) => {
          if (item !== "") {
            return (
              <p
                key={item}
                className="text-13 text-Blue07 dark:text-VeryLightBlue05"
              >
                {item}
              </p>
            );
          } else return null;
        })}
    </div>
  );
};

const PricingBlock = ({
  isHeading,
  name,
  qty,
  price,
  total,
  className,
}: {
  isHeading?: boolean;
  name: string;
  qty: string | number;
  price: string | number;
  total: string | number;
  className?: string;
}) => {
  return (
    <div
      className={`${className && className} flex items-center justify-between px-6 md:px-6`}
    >
      <div className="flex flex-col gap-2">
        <p
          className={`${isHeading ? "text-13 text-Blue07 dark:text-VeryLightBlue05 " : "text-15 font-bold text-Black08 dark:text-PureWhite"} `}
        >
          {name}
        </p>
        <p className="text-15 font-bold text-Blue07 dark:text-GraylishBlue06 md:hidden">
          {typeof price === "number" && typeof qty === "number"
            ? `${qty} x $ ${price}`
            : null}
        </p>
      </div>
      <div className="flex items-center gap-8 text-right">
        <p
          className={`${isHeading ? "text-13 " : "text-15 font-bold"} hidden min-w-8 text-center text-Blue07 dark:text-VeryLightBlue05 md:block`}
        >
          {qty}
        </p>
        <p
          className={`${isHeading ? "text-13" : "text-15 font-bold"} hidden min-w-20 text-Blue07 dark:text-VeryLightBlue05 md:block`}
        >
          {typeof price === "number" ? `$ ${price.toFixed(2)}` : price}
        </p>
        <p
          className={`${isHeading ? "text-13 text-Blue07 dark:text-VeryLightBlue05" : "text-15 font-bold text-Black08 dark:text-PureWhite"} min-w-20 `}
        >
          {typeof price === "number" && typeof qty === "number"
            ? `$ ${(qty * price).toFixed(2)}`
            : total}
        </p>
      </div>
    </div>
  );
};

const DetailMain = ({ data }: { data: Invoice }) => {
  return (
    <section className="px-6 py-3">
      <Wrapper className="rounded-lg bg-PureWhite p-6 dark:bg-VeryDarkBlue03">
        <article className="flex flex-col gap-8 pb-4 md:flex-row md:justify-between">
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-15 font-bold text-Blue07 dark:text-GraylishBlue06">
              #
              <span className="text-Black08 dark:text-PureWhite">
                {data.id}
              </span>
            </p>
            <p className="text-13 text-Blue07 dark:text-VeryLightBlue05">
              {data.description}
            </p>
          </div>
          <Block title={null} desc={data.senderAddress} />
        </article>
        <article className="grid grid-cols-2 gap-y-3 py-4 md:grid-cols-3">
          <Block
            className="col-start-1 row-start-1"
            title="Inovice Date"
            desc={data.createdAt}
          />
          <Block
            className="col-start-1 row-start-2 place-self-end justify-self-start"
            title="Payment Due"
            desc={data.paymentDue}
          />
          <Block
            className="col-start-2 row-start-1"
            title="Bill To"
            desc={data.clientName}
          />
          <Block
            className="col-start-2 row-start-2"
            desc={data.clientAddress}
            title={null}
          />
          <Block
            className="col-start-1 row-start-3 mt-5 md:col-start-3 md:row-start-1 md:mt-0"
            title="Sent to"
            desc={data.clientEmail}
          />
        </article>
        <article className="flex flex-col gap-8 overflow-hidden rounded-lg bg-[#F9FAFE] pt-6 dark:bg-DarkBlue04">
          <PricingBlock
            isHeading
            name="Item Name"
            qty="QTY."
            price="Price"
            total="Total"
            className="hidden md:flex"
          />
          {data.items.map((item) => (
            <PricingBlock
              name={item.name}
              qty={item.quantity}
              price={item.price}
              total={item.total}
            />
          ))}
          <div className="flex items-center justify-between bg-[#373B53] px-6 py-7">
            <p className="text-13 text-PureWhite">Amount Due</p>
            <p className="text-2xl font-bold text-PureWhite">${556.0}</p>
          </div>
        </article>
      </Wrapper>
    </section>
  );
};

export default DetailMain;
