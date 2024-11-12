import { HTMLInputTypeAttribute } from "react";
import { FormField } from "./FormField";
import { Button, Form } from "./styled";

interface Props {
  formLabel: string;
  buttonLabel: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  defaultValue?: string;
  changeMethod: (nameOrEmail: string) => Promise<void>;
}

const getFormFieldValue = (target: EventTarget, name: string): string => {
  if (!(target instanceof HTMLFormElement))
    throw new Error("Not a HTMLFormElement instance.");

  const element = target.elements.namedItem(name);

  if (element instanceof HTMLInputElement) return element.value;

  throw new Error("Not an HTMLInputElement instance");
};

export const SimpleForm = ({
  formLabel,
  buttonLabel,
  name,
  type = "text",
  defaultValue = "",
  changeMethod,
}: Props) => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const value = getFormFieldValue(event.target, name);
    console.log({ value });
    try {
      await changeMethod(value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article>
      <Form onSubmit={onSubmit}>
        <header>
          <h3 className="capitalize">{formLabel}</h3>
        </header>

        <FormField type={type} name={name} defaultValue={defaultValue} />

        <Button style={{ width: "150px" }} type="submit">
          {buttonLabel}
        </Button>
      </Form>
    </article>
  );
};
