import { useNavigate } from "react-router-dom";
import { FormField } from "./FormField";
import { Button, Form } from "./styled";
import { Path } from "../routing/Router";

interface Props {
  type: "Register" | "Login";
  authMethod: (email: string, password: string) => Promise<void>;
}

const getFormFieldValue = (target: EventTarget, name: string): string => {
  if (!(target instanceof HTMLFormElement))
    throw new Error("Not a HTMLFormElement instance.");

  const element = target.elements.namedItem(name);

  if (element instanceof HTMLInputElement) return element.value;

  throw new Error("Not an HTMLInputElement instance");
};

export const AuthForm = ({ type, authMethod }: Props) => {
  const navigate = useNavigate();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const email = getFormFieldValue(event.target, "email");
    const password = getFormFieldValue(event.target, "password");

    try {
      await authMethod(email, password);
      navigate(Path.Dashboard, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article>
      <Form onSubmit={onSubmit}>
        <header>
          <h3>{type}</h3>
        </header>

        <FormField type="email" name="email" placeholder="johndoe@mail.com" />
        <FormField
          type="password"
          name="password"
          placeholder="secret_password_42"
        />
        <Button style={{ width: "150px" }} type="submit">
          {type}
        </Button>
      </Form>
    </article>
  );
};
