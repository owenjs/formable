import { createContext } from "react";

export type TInputContext = {
  id: string;
  name: string;
  // ToDo: Add `RegisterOptions` here, passed as a prop to <Input />
};

const InputContext = createContext<TInputContext>({ id: "", name: "" });

export default InputContext;
