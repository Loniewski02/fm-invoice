import Plus from "@/public/assets/icon-plus.svg";
import ArrowDown from "@/public/assets/icon-arrow-down.svg";
import Wrapper from "../layout/Wrapper";

const Controls = () => {
  return (
    <section className="px-6 py-8 lg:pt-[78px]">
      <Wrapper className="flex items-center justify-between">
        <div className="flex flex-col gap-px">
          <h1 className="dark:text-PureWhite text-2xl font-bold text-Black08 md:text-4xl">
            Invoices
          </h1>
          <p className="text-13 text-GraylishBlue06 dark:text-VeryLightBlue05">
            No invoices
          </p>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <button className="text-15 dark:text-PureWhite flex items-center gap-3 font-bold text-Black08">
            <span>
              Filter <span className="hidden md:inline">by status</span>
            </span>
            <ArrowDown />
          </button>
          <button className="text-15 flex items-center gap-2 rounded-[24px] bg-Violet01 p-[6px] pr-4 text-White11 transition hover:bg-LightViolet02 active:scale-95">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-White11">
              <Plus className="block" />
            </span>
            <span>
              New <span className="hidden md:inline">Invoice</span>
            </span>
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Controls;
