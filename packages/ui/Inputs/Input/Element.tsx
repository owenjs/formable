import InputContext from "./Context";
import { DetailedHTMLProps, FC, InputHTMLAttributes, useContext } from "react";
import { useFormContext } from "react-hook-form";

export interface InputElementProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "id" | "name"> {}

const InputElement: FC<InputElementProps> = props => {
  const { id, name } = useContext(InputContext);
  const { register } = useFormContext();

  return <input {...register(name)} id={id} name={name} {...props} />;
};

export default InputElement;
