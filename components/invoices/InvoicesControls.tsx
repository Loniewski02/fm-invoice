"use client";
import { useState } from "react";

import Wrapper from "../layout/Wrapper";

import Checked from "@/public/assets/icon-check.svg";
import Plus from "@/public/assets/icon-plus.svg";
import ArrowDown from "@/public/assets/icon-arrow-down.svg";

const STATUS = ["draft", "pending", "paid"];

const InvoicesControls = () => {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <section className="px-6 py-8 md:pt-14 lg:pt-[78px]">
      <Wrapper className="flex items-center justify-between">
        <div className="flex flex-col gap-px">
          <h1 className="text-2xl font-bold text-Black08 dark:text-PureWhite md:text-4xl">
            Invoices
          </h1>
          <p className="text-13 text-GraylishBlue06 dark:text-VeryLightBlue05">
            No invoices
          </p>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <div className="relative">
            <button
              onClick={() => {
                setExpanded((prevState) => !prevState);
              }}
              className="flex items-center gap-3 text-15 font-bold text-Black08 dark:text-PureWhite"
            >
              <span>
                Filter <span className="hidden md:inline">by status</span>
              </span>
              <ArrowDown
                className={`${expanded ? "rotate-180" : "rotate-0"} transition-transform`}
              />
            </button>
            {expanded && (
              <div className="absolute left-1/2 top-[100%] z-40 flex -translate-x-1/2 translate-y-6 flex-col items-start gap-4 rounded-lg bg-PureWhite p-6 shadow-md dark:bg-DarkBlue04 md:w-[192px]">
                {STATUS.map((item, i) => (
                  <button
                    key={i}
                    className="group flex w-full items-center gap-3"
                    onClick={() => {
                      setStatus(item);
                    }}
                  >
                    <span
                      className={`${status === item ? "bg-Violet01" : "bg-VeryLightBlue05 dark:bg-VeryDarkBlue03"} grid h-4 w-4 place-content-center rounded-[2px] border border-transparent transition group-hover:border-Violet01 `}
                    >
                      <Checked
                        className={`${status === item ? "block" : "hidden"}`}
                      />
                    </span>
                    <span className="text-15 font-bold text-Black08 first-letter:uppercase dark:text-PureWhite">
                      {item}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="flex items-center gap-2 rounded-[24px] bg-Violet01 p-[6px] pr-4 text-15 text-White11 transition hover:bg-LightViolet02 active:scale-95">
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

export default InvoicesControls;
