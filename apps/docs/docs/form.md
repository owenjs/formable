---
sidebar_position: 2
---

# Form

Use the `<Form />` component to create individual forms and combine it with the methods returned for your `useForm` hook.

```tsx
import { Form } from "@owenjs/formable";
import { useForm } from "react-hook-form";

const Component = () => {
  const methods = useForm();
  
  return (
    <Form methods={methods}>
      ...
    </Form>
  );
};
```

Now any [`<FormElement />`](/form-elements) components nested in this form will use the methods passed here as their context.

## Listening to Submissions

To listen to form submissions use the `methods.handleSubmit()` utility given by the `useForm` hook, and pass a SubmitHandle function to it.

:::caution
The `useForm` hook must be strictly typed to avoid TypeScript complaining
:::

```tsx
import { Form, FormElement } from "@owenjs/formable";
import { useForm, SubmitHandler } from "react-hook-form";

// highlight-next-line
type FormData = { firstName: string };

const Component = () => {
  const methods = useForm<FormData>();

  // highlight-start
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // { firstName: "..." }
  };
  // highlight-end

  return (
    // highlight-next-line
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      ...
    </Form>
  );
};
```

## Styling

Use the native `className` prop as the styling is completely up to you!

```tsx
<Form className="my-class-name" />
```

## Component API

The Form component includes all props the native [`<form />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) element has, as well as:

| Props   | Default  | Description                                                        |
|---------|----------|--------------------------------------------------------------------|
| methods | required | `UseFormReturn`<br/><br/>The return methods of your `useForm` hook |
