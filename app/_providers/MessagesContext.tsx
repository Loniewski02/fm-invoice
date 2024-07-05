"use client";

import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export const MessagesContext = createContext(
  {} as {
    status: number;
    setStatus: Dispatch<SetStateAction<number>>;
    message: string;
    setMessage: Dispatch<SetStateAction<string>>;
    isShown: boolean;
    setIsShown: Dispatch<SetStateAction<boolean>>;
    initial: boolean;
    setInitial: Dispatch<SetStateAction<boolean>>;
  },
);

export default function MessagesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [status, setStatus] = useState(500);
  const [message, setMessage] = useState("Inputs can't be empty");
  const [isShown, setIsShown] = useState(false);
  const [initial, setInitial] = useState(true);

  return (
    <MessagesContext.Provider
      value={{
        status,
        setStatus,
        message,
        setMessage,
        isShown,
        setIsShown,
        initial,
        setInitial,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
