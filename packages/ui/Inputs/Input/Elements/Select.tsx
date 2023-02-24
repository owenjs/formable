import InputContext from "../Context";
import { TNativeElementToOmit } from "../../../types/Input";
import { DetailedHTMLProps, FC, SelectHTMLAttributes, useContext, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type TOption = { key?: string | number; value: string; label: string };

export interface IProps
  extends Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TNativeElementToOmit> {
  options: TOption[];
  renderOption: (data: TOption) => ReactNode;
}

const SelectElement: FC<IProps> = props => {
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
