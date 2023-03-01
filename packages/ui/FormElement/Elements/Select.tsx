import InputContext from "../Context";
import { TNativeElementToOmit } from "../../types/Input";
import { DetailedHTMLProps, SelectHTMLAttributes, useContext, FC } from "react";
import { useFormContext } from "react-hook-form";

type TOption = { key: number | string; value: string; label: string };

export interface IProps
  extends Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TNativeElementToOmit> {
  options: TOption[];
}

const SelectElement: FC<IProps> = props => {
  const { options, placeholder, ...rest } = props;
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

      {options.map(({ key, value, label }) => (
        <option key={key} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectElement;
