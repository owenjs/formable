import InputContext from "../Context";
import { TNativeElementToOmit } from "../../types/Input";
import { DetailedHTMLProps, FC, InputHTMLAttributes, useContext } from "react";
import { useFormContext } from "react-hook-form";

export interface InputElementProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TNativeElementToOmit> {}

const InputElement: FC<InputElementProps> = props => {
  const { type = "text", ...rest } = props;
  const { id, name } = useContext(InputContext);
  const { register } = useFormContext();

  // ToDo: type="checkbox" needs to be a controlled input?
  return <input {...register(name)} type={type} id={id} name={name} {...rest} />;
};

export default InputElement;
