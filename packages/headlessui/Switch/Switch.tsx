import * as React from "react";
import { useContext } from "react";
import { Switch as HeadlessuiSwitch, SwitchProps as HeadlessuiSwitchProps } from "@headlessui/react";
import { InputContext } from "@formatomus/core";
import { useController, useFormContext } from "react-hook-form";

type SwitchProps<C extends React.ElementType> = Omit<
  HeadlessuiSwitchProps<C>,
  "id" | "onChange" | "onBlur" | "checked" | "ref" | "value" | "name" | "defaultChecked"
>;

const SwitchElementComponent = <C extends React.ElementType = "button">(props: SwitchProps<C>) => {
  const { children, ...rest } = props;
  const { id, name } = useContext(InputContext);
  const { control } = useFormContext();

  const { field } = useController({
    name,
    control
  });

  return (
    <HeadlessuiSwitch
      id={id}
      onChange={field.onChange}
      onBlur={field.onBlur}
      checked={field.value}
      ref={field.ref}
      {...rest}
    >
      {children}
    </HeadlessuiSwitch>
  );
};

export const Switch = Object.assign(SwitchElementComponent, {
  Label: HeadlessuiSwitch.Label,
  Group: HeadlessuiSwitch.Group,
  Description: HeadlessuiSwitch.Description
});
