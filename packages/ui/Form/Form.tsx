import { Children, createElement, ReactElement } from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";
import { FormableInputComponent } from "../types/Input";

export interface FormProps<T extends FieldValues> extends UseFormReturn<T> {
  children: ReactElement<FormableInputComponent<T>> | ReactElement<FormableInputComponent<T>>[];
}

export const Form = <T extends FieldValues>(props: FormProps<T>) => {
  const { children, ...useFormMethods } = props;

  return (
    <FormProvider {...useFormMethods}>
      <form>
        {Children.map(children, child => {
          return child.props.name
            ? createElement<FormableInputComponent<T>>(child.type, {
                ...{
                  ...child.props,
                  register: useFormMethods.register,
                  key: child.props.name
                }
              })
            : child;
        })}
      </form>
    </FormProvider>
  );
};
