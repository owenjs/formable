---
sidebar_position: 1
---

# Input

The native input is the simplest of them all

```tsx
import { FormElement } from "@formatomus/core";

<FormElement.Input />
```

The `<FormElement.Input />` component includes all the native props the regular `<input />` element has, while automatically registering the element to the `useForm` hook context.

Ensure the component is wrapped in the [`<FormElement />`](/form-elements/) component so that is it registered to your `useForm` hook context correctly.

## Input Types

Under the hook this component is a wrapper for the native `<input />` element. Meaning you can change the type of input using the `type` prop.

For example if you wished this element to be a number input:

```tsx
<FormElement.Input type="number" />
```

Or a file:

```tsx
<FormElement.Input type="file" />
```

[All available input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

## Styling

Use the native `className` prop as the styling is completely up to you!

```tsx
<FormElement.Input className="my-class-name" />
```

## Error Handling

Error handling is easy with the `useForm` hook, and we recommend powering it with [yup](/error-handling)

## Component API

The component inherits all the available props from the native [`<input />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element.

:::caution
However you can't use the `id` or `name` prop as we generate these automatically.

You also can't use `onChange`, `onBlur`, `ref`, `disabled` as these are handled by React Form Hook - this will likely change
:::

## Full Example

Here's a full example using a text input:

```tsx
import { Form, FormElement } from "@formatomus/core";
import { useForm } from "react-hook-form";

type FormData = { firstName: string };

const Component = () => {
  const methods = useForm<FormData>();
  
  return (
    <Form methods={methods}>
      <FormElement name="firstName">
        <FormElement.Label>First Name</FormElement.Label>

        <FormElement.Input placeholder="First Name" />

        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>
      </FormElement>
    </Form>
  );
};
```
