---
sidebar_position: 1
---

# Input

The native input is the simplest of them all

```typescript jsx
import { FormElement } from "@owenjs/formable";

<FormElement.Input />
```

The `<FormElement.Input />` component includes all the native props the regular `<input />` element has, while automatically registering the element to the `useForm` hook

### Use within the Form element

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

### Styling

Use the native `className` prop as the styling is completely up to you!

```typescript jsx
<Input name="firstName" className="my-class-name" />
```

### Error Handling

Error handling is easy with the `useForm` hook, and we recommend powering it with [yup](/docs/error-handling/install-yup)

