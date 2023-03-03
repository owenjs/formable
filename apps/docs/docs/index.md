---
sidebar_position: 1
---

# Getting Started

Formatomus - Unstyled React form components which register to [react-hook-form](https://react-hook-form.com/) context automatically.

Install Formatomus

:::danger
For now your project **must** be able to compile TypeScript files
:::

  ```bash
yarn add @formatomus/core react-hook-form @hookform/error-message
```

## Create your first Form

```tsx
import { Form, FormElement } from "@formatomus/core";
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
