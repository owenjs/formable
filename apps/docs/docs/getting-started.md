---
sidebar_position: 1
---

# Getting Started

:::danger Not currently published on NPM
ToDo
:::

Install Formable

  ```bash
yarn add @owenjs/formable
```

## Create your first Form

```typescript jsx
import { Form, Input } from "@owenjs/formable";
import { useForm } from "react-hook-form";

const Component = () => {
  const methods = useForm();
  
  return (
    <Form {...methods}>
      <Input name="firstName" />
      <Input name="lastName" />
    </Form>
  );
};
```
