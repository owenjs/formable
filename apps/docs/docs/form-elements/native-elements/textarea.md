---
sidebar_position: 2
---

# Textarea

The native textarea is easy too!

```tsx
import { FormElement } from "@formatomus/core";

<FormElement.Textarea />
```

The `<FormElement.Textarea />` component includes all the native props the regular `<textarea />` element has, while automatically registering the element to the `useForm` hook context.

Ensure the component is wrapped in the [`<FormElement />`](/form-elements/) component so that is it registered to your `useForm` hook context correctly.

## Styling

Use the native `className` prop as the styling is completely up to you!

```tsx
<FormElement.Textarea className="my-class-name" />
```

## Error Handling


Error handling is easy with the `useForm` hook, and we recommend powering it with [yup](/error-handling)
## Component API

The component inherits all the available props from the native [`<textarea />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element.

:::caution
However you can't use the `id` or `name` prop as we generate these automatically.

You also can't use `onChange`, `onBlur`, `ref`, `disabled` as these are handled by React Form Hook - this will likely change
:::

## Full Example

Here's a full example using the textarea input:

```tsx
import { Form, FormElement } from "@formatomus/core";
import { useForm } from "react-hook-form";

type FormData = { info: string };

const Component = () => {
  const methods = useForm<FormData>();
  
  return (
    <Form methods={methods}>
      <FormElement name="info">
        <FormElement.Label>Information</FormElement.Label>

        <FormElement.Textarea placeholder="Information" />

        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>
      </FormElement>
    </Form>
  );
};
```
