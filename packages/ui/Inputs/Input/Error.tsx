import InputContext from "./Context";
import { FC, ReactNode, useContext } from "react";
import { useFormContext, Message, MultipleFieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export interface InputErrorProps {
  children: (data: { message: Message; messages?: MultipleFieldErrors }) => ReactNode;
}

const InputError: FC<InputErrorProps> = props => {
  const { children } = props;

  const { name } = useContext(InputContext);
  const {
    formState: { errors }
  } = useFormContext();

  return <ErrorMessage name={name} errors={errors} render={children} />;
};

export default InputError;
