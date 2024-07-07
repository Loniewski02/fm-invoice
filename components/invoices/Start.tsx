"use client";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { gettinStartedAction } from "@/utils/request";

import FormBox from "../ui/FormBox";
import Submit from "../ui/Submit";

const INPUTS = [
  {
    id: "street-address",
    name: "street-address",
    label: "Street Address",
    placeholder: "Onion street 3 ",
    type: "text",
  },
  {
    id: "post-code",
    name: "post-code",
    label: "Post Code",
    placeholder: "00-001",
    type: "text",
  },
  {
    id: "city",
    name: "city",
    label: "City",
    placeholder: "Warsaw",
    type: "text",
  },
  {
    id: "country",
    name: "country",
    label: "Country",
    placeholder: "Poland",
    type: "text",
  },
];

const initialState = {
  status: null,
  message: "",
  data: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
};

const Start = () => {
  const { update } = useSession();

  const [state, action] = useFormState<ResidenceData, FormData>(
    gettinStartedAction,
    initialState,
  );

  useEffect(() => {
    if (state.status === 200) {
      console.log(state.data);
      update({ address: state.data });
    }
  }, [state]);

  return (
    <section className="fixed bottom-0 left-0 right-0 top-0 z-[100] grid place-items-center p-6">
      <div className="relative z-10 max-w-[476px] rounded-xl bg-PureWhite px-8 py-10 dark:bg-DarkBlue04">
        <h2 className="mb-2 text-2xl font-bold text-Black08 dark:text-PureWhite">
          Getting Started
        </h2>
        <p className="mb-10 text-15 text-GraylishBlue06 dark:text-VeryLightBlue05">
          State your place of residence
        </p>
        <form
          action={(formData) => {
            action(formData);
            console.log(state);
          }}
          className="grid grid-cols-2 gap-4"
        >
          {INPUTS.map((input, i) => (
            <FormBox
              key={input.id}
              input={input}
              className={`${i === 0 && "col-span-2 row-start-1"} ${i === 1 && "row-start-2"} ${i === 3 && "col-span-2 row-start-3"}`}
            />
          ))}
          <Submit className={`right-8 top-12 w-[150px] md:absolute`}>
            Submit
          </Submit>
        </form>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[rgba(12,14,22,.3)] p-6 backdrop-blur-xl" />
    </section>
  );
};

export default Start;
