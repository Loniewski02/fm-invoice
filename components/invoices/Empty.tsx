import Bg from "@/public/assets/illustration-empty.svg";

const Empty = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <Bg className="mb-10" />
      <h2 className="mb-6 text-2xl font-bold text-Black08 dark:text-PureWhite">
        There is nothing here
      </h2>
      <p className="text-13 text-GraylishBlue06 dark:text-VeryLightBlue05">
        Create an invoice by clicking the{" "}
        <span className="font-bold">
          New <span className="hidden lg:inline">Invoice</span>
        </span>{" "}
        button and get started
      </p>
    </section>
  );
};

export default Empty;
