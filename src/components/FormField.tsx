import { useId } from "react";
import { Input } from "./styled";

interface Props {
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  defaultValue?: string;
}

export const FormField = ({ type, name, placeholder, defaultValue }: Props) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>
        <Input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
};
