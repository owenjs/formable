import { TNativeElementToOmit } from "../../../types/Input";
import InputContext from "../Context";
import { FC, useContext, DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

export interface IProps
  extends Omit<
    DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    TNativeElementToOmit
  > {}

const TextareaElement: FC<IProps> = props => {
  const { id, name } = useContext(InputContext);
  const { register } = useFormContext();

  return <textarea {...register(name)} id={id} name={name} {...props} />;
};

export default TextareaElement;
