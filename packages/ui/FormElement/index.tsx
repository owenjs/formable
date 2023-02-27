import { useId } from "react";
import * as React from "react";

import InputContext from "./Context";
import InputLabel from "./Label";
import InputElement from "./Elements/Input";
import TextareaElement from "./Elements/Textarea";
import SelectElement from "./Elements/Select";
import InputError from "./Error";

type OwnInputProps<C extends React.ElementType> = {
  as?: C;
  name: string;
};

type InputProps<C extends React.ElementType> = React.PropsWithChildren<OwnInputProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof OwnInputProps<C>>;

const FormElementComponent = <C extends React.ElementType = typeof React.Fragment>(props: InputProps<C>) => {
  const { as, name, children, ...rest } = props;
  const id = useId();

  const As = as || React.Fragment;

  return (
    <InputContext.Provider value={{ id, name }}>
      <As {...rest}>{children}</As>
    </InputContext.Provider>
  );
};

export const FormElement = Object.assign(FormElementComponent, {
  Input: InputElement,
  Textarea: TextareaElement,
  Select: SelectElement,
  Label: InputLabel,
  Error: InputError
});
