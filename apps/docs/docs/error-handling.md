---
sidebar_position: 4
---

# Error Handling

We recommend using [yup](https://www.npmjs.com/package/yup) to handle errors.

```bash
yarn add @hookform/resolvers yup
```

Here's a full example using yup as form validation:

```tsx
import { Form, FormElement } from "@formatomus/core";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// highlight-start
const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();
// highlight-end

// highlight-next-line
type FormData = yup.InferType<typeof schema>;

const Component = () => {
  const methods = useForm<FormData>({
    // highlight-next-line
    resolver: yupResolver(schema)
  });

  return (
    <Form methods={methods}>
      <FormElement name="firstName">
        <FormElement.Label>First Name</FormElement.Label>

        <FormElement.Input placeholder="First Name" />
        
        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>
      </FormElement>

      <FormElement name="age">
        <FormElement.Label>Age</FormElement.Label>

        <FormElement.Input type="number" placeholder="Age" />

        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>
      </FormElement>
    </Form>
  );
}
```

It's as simple as that 🥳
