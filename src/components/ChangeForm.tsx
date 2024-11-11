import { useUser } from "../context/AppContext";
import { FormField } from "./FormField";
import { Button, Form } from "./styled";

interface Props {
  type: "name" | "email";
  changeMethod: (nameOrEmail: string) => Promise<void>;
}

const getFormFieldValue = (target: EventTarget, name: string): string => {
  if (!(target instanceof HTMLFormElement))
    throw new Error("Not a HTMLFormElement instance.");

  const element = target.elements.namedItem(name);

  if (element instanceof HTMLInputElement) return element.value;

  throw new Error("Not an HTMLInputElement instance");
};

export const ChangeForm = ({ type, changeMethod }: Props) => {
  const user = useUser();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const nameOrEmail = getFormFieldValue(event.target, type);

    try {
      await changeMethod(nameOrEmail);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <article>
      <Form onSubmit={onSubmit}>
        <header>
          <h3 className="capitalize">Change {type}</h3>
        </header>

        <FormField type={type} name={type} defaultValue={user[type]} />

        <Button style={{ width: "150px" }} type="submit">
          Update
        </Button>
      </Form>
    </article>
  );
};
