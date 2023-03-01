---
sidebar_position: 3
---

# Select

You bet native selects are easy.

```tsx
import { FormElement } from "@owenjs/formable";

<FormElement.Select
  options={[
    {
      key: "foo",
      value: "foo",
      label: "Foo"
    },
    {
      key: "foo",
      value: "bar",
      label: "Bar"
    }
  ]}
/>
```

The `<FormElement.Select />` component includes all the native props the regular `<select />` element has, while automatically registering the element to the useForm hook context.

Ensure the element is wrapped in the [`<FormElement />`](/form-elements/) component so that is it registered to your `useForm` hook context correctly.

## Select Options

Each option within the `options` prop is rendered separately as an `<option />` element.

## Styling

Use the native `className` prop as the styling is completely up to you!

```tsx
<FormElement.Select className="my-class-name" />
```

## Error Handling

Error handling is easy with the `useForm` hook, and we recommend powering it with [yup](/error-handling)

## Component API

The component inherits all the available props from the native [`<select />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) element.

:::caution
However you can't use the `id` or `name` prop as we generate these automatically.

You also can't use `onChange`, `onBlur`, `ref`, `disabled` as these are handled by React Form Hook - this will likely change
:::

As well as:

| Props   | Default  | Description                                                                                                            |
|---------|----------|------------------------------------------------------------------------------------------------------------------------|
| options | required | `{ key: number or string; value: string; label: string }[]`<br/><br/>An array of each option the select should display |

## Full Example

Here's a full example using the select input:

```tsx
import { Form, FormElement } from "@owenjs/formable";
import { useForm } from "react-hook-form";

type FormData = { bestSupermarket: string };

const Component = () => {
  const methods = useForm<FormData>();
  
  return (
    <Form methods={methods}>
      <FormElement name="bestSupermarket">
        <FormElement.Label>Best Supermarket</FormElement.Label>

        <FormElement.Select
          options={[
            {
              key: "lidl",
              value: "lidl",
              label: "Lidl"
            },
            {
              key: "tesco",
              value: "tesco",
              label: "Tesco"
            }
          ]}
        />

        <FormElement.Error>{({ message }) => <p>{message}</p>}</FormElement.Error>
      </FormElement>
    </Form>
  );
};
```
