import { DetailedHTMLProps, FormHTMLAttributes, PropsWithChildren } from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

interface FormProps<T extends FieldValues>
  extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  methods: UseFormReturn<T>;
}

export const Form = <T extends FieldValues>(props: PropsWithChildren<FormProps<T>>) => {
  const { children, methods, ...formProps } = props;

  return (
    <FormProvider {...methods}>
      <form {...formProps}>{children}</form>
    </FormProvider>
  );
};
