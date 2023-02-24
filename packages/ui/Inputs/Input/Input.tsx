import { useId } from "react";
import * as React from "react";

import InputContext from "./Context";
import InputLabel from "./Label";
import InputElement from "./Element";
import TextareaElement from "./Elements/Textarea";
import SelectElement from "./Elements/Select";
import InputError from "./Error";

type OwnInputProps<C extends React.ElementType> = {
  as?: C;
  name: string;
};

export type InputProps<C extends React.ElementType> = React.PropsWithChildren<OwnInputProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof OwnInputProps<C>>;

const Input = <C extends React.ElementType = typeof React.Fragment>(props: InputProps<C>) => {
  const { as, name, children, ...rest } = props;
  const uId = useId();

  const As = as || React.Fragment;

  return (
    <InputContext.Provider value={{ id: uId, name }}>
      <As {...rest}>{children}</As>
    </InputContext.Provider>
  );
};

export default Object.assign(Input, {
  Element: InputElement,
  Textarea: TextareaElement,
  Select: SelectElement,
  Label: InputLabel,
  Error: InputError
});
