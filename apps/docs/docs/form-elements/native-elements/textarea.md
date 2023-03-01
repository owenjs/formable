---
sidebar_position: 2
---

# Textarea

The native textarea is easy too!

```typescript jsx
import { FormElement } from "@owenjs/formable";

<FormElement.Textarea />
```

The `<FormElement.Textarea />` component includes all the native props the regular `<textarea />` element has, while automatically registering the element to the `useForm` hook.

Ensure the element is wrapped in the [FormElement](/form-elements/) component so that is it registered to your `useForm` hook correctly.

## Styling

Use the native `className` prop as the styling is completely up to you!

```typescript jsx
<FormElement.Textarea className="my-class-name" />
```

## Error Handling

Error handling is easy with the `useForm` hook, and we recommend powering it with [yup](/error-handling)

## Full Example

Here's a full example using the native text input:

```typescript jsx
import { Form, FormElement } from "@owenjs/formable";
import { useForm } from "react-hook-form";

const Component = () => {
  const methods = useForm();
  
  return (
    <Form {...methods}>
      <FormElement name="info">
        <FormElement.Label>Information</FormElement.Label>

        <FormElement.Textarea placeholder="Information" />

        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>
      </FormElement>
    </Form>
  );
};
```
