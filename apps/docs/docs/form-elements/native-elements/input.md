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

Ensure the element is wrapped in the [FormElement](/docs/form-elements/) component so that is it register to your `useForm` hook correctly.

## Input Types

Under the hook this component is a wrapper for the native `<input />` element. Meaning you can change the type of input using the `type` prop.

For example if you wished this element to be a number input:

```typescript jsx
<FormElement.Input type="number" />
```

Or a file:

```typescript jsx
<FormElement.Input type="file" />
```

[All available input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

## Styling

Use the native `className` prop as the styling is completely up to you!

```typescript jsx
<FormElement.Input className="my-class-name" />
```

## Error Handling

Error handling is easy with the `useForm` hook, and we recommend powering it with [yup](/docs/error-handling/install-yup)

## Full Example

Here's a full example using the native text input:

```typescript jsx
import { Form, FormElement } from "@owenjs/formable";
import { useForm } from "react-hook-form";

const Component = () => {
  const methods = useForm();
  
  return (
    <Form {...methods}>
      <FormElement name="firstName">
        <FormElement.Label>First Name</FormElement.Label>

        <FormElement.Input placeholder="First Name" />

        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>
      </FormElement>
    </Form>
  );
};
```

