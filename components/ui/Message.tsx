"use client";
import { useContext, useEffect } from "react";

import { MessagesContext } from "@/app/_providers/MessagesContext";

const Message = () => {
  const timeoutDuration = 10000;
  const { isShown, initial, setIsShown, status, message } =
    useContext(MessagesContext);

  useEffect(() => {
    if (isShown) {
      const identifier = setTimeout(() => {
        setIsShown(false);
      }, timeoutDuration);

      return () => clearTimeout(identifier);
    }
  }, [isShown, status, message, setIsShown, timeoutDuration]);

  return (
    <div
      className={`${isShown ? "animate-show" : "animate-hide"} ${initial ? "hidden" : "block"} ${status === 200 ? "bg-[#89f0e2] text-Black08" : "bg-Red09 text-PureWhite"}
 text-VeryDarkBlue fixed -right-[150%]  bottom-8 z-50 max-w-[330px] rounded-md px-6 py-4 font-bold`}
    >
      <span className={`${status > 399 ? "inline" : "hidden "}`}>
        {`Error: `}
      </span>
      <span>{message}</span>
    </div>
  );
};

export default Message;
