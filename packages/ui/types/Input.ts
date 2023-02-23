import { UseFormRegister, FieldValues, FieldPath } from "react-hook-form";

export type FormableInputComponent<T extends FieldValues> = {
  register?: UseFormRegister<T>;
  name: FieldPath<T>;
};
