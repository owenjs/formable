import InputContext from "./Context";
import { FC, DetailedHTMLProps, LabelHTMLAttributes, PropsWithChildren, useContext } from "react";

export interface InputLabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const InputLabel: FC<PropsWithChildren<InputLabelProps>> = props => {
  const { children, ...labelProps } = props;
  const { id } = useContext(InputContext);

  return (
    <label htmlFor={id} {...labelProps}>
      {children}
    </label>
  );
};

export default InputLabel;
