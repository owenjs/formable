import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldValues } from "react-hook-form";
import { FormableInputComponent } from "../../types/Input";

export interface InputProps<T extends FieldValues>
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof UseFormRegisterReturn>,
    FormableInputComponent<T> {}

const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { register, name, ...rest } = props;

  return <input {...register?.(name)} name={name} {...rest} />;
};

export default Input;
