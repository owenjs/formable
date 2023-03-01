---
sidebar_position: 1
---

# Getting Started

Install Formable

:::danger
For now your project **must** be able to compile TypeScript files
:::

  ```bash
yarn add @owenjs/formable
```

## Create your first Form

```tsx
import { Form, FormElement } from "@owenjs/formable";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = { firstName: string };

const Component = () => {
  const methods = useForm<FormData>();
  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // { firstName: "..." }
  };
  
  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <FormElement name="firstName">
        <FormElement.Label>First Name</FormElement.Label>

        <FormElement.Input placeholder="First Name" />

        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>
      </FormElement>
    </Form>
  );
};
```
