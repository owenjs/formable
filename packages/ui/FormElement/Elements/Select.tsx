import InputContext from "../Context";
import { TNativeElementToOmit } from "../../types/Input";
import { RecordWithRequiredKeys } from "../../types/utils";
import { DetailedHTMLProps, SelectHTMLAttributes, useContext, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type TOption = { value: string; label: string };

export interface IProps<T extends TOption>
  extends Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TNativeElementToOmit> {
  options: RecordWithRequiredKeys<keyof TOption, T>[];
  renderOption: (data: RecordWithRequiredKeys<keyof TOption, T>) => ReactNode;
}

const SelectElement = <T extends TOption>(props: IProps<T>) => {
  const { options, renderOption, placeholder, ...rest } = props;
  const { id, name } = useContext(InputContext);
  const { register } = useFormContext();

  // ToDo: Document how to use the placeholder prop
  return (
    <select {...register(name)} id={id} name={name} defaultValue={placeholder && "default"} {...rest}>
      {placeholder && (
        <option value="default" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map(option => renderOption(option))}
    </select>
  );
};

export default SelectElement;
