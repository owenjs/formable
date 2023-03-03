import { useEffect } from "react";
import { Form, FormElement } from "@formatomus/core";
import { Switch } from "@formatomus/headlessui";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      names: "Asda",
      options: "default",
      checkbox: true
    }
  });

  useEffect(() => {
    const subscription = methods.watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [methods]);

  useEffect(() => {
    methods.setError("checkbox", {
      type: "manual",
      message: "Triple Check This"
    });
  }, [methods]);

  return (
    <div className="App">
      <Form methods={methods} onSubmit={methods.handleSubmit(data => console.log(data))}>
        <FormElement
          as="div"
          name="firstName"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem"
          }}
        >
          <FormElement.Label>First Name</FormElement.Label>

          <FormElement.Input placeholder="First Name" />

          <FormElement.Error>{({ message }) => <p style={{ color: "red" }}>{message}</p>}</FormElement.Error>
        </FormElement>

        <FormElement
          as="div"
          name="names"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem"
          }}
        >
          <FormElement.Label>Names</FormElement.Label>

          <FormElement.Textarea />

          <FormElement.Error>{({ message }) => <p style={{ color: "red" }}>{message}</p>}</FormElement.Error>
        </FormElement>

        <FormElement
          as="div"
          name="options"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem"
          }}
        >
          <FormElement.Label>Options</FormElement.Label>

          <FormElement.Select
            placeholder="Please Select"
            options={[
              {
                key: 1,
                value: "1",
                label: "1"
              },
              {
                key: 2,
                value: "2",
                label: "2"
              }
            ]}
          />

          <FormElement.Error>{({ message }) => <p style={{ color: "red" }}>{message}</p>}</FormElement.Error>
        </FormElement>

        <FormElement
          as="div"
          name="checkbox"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem"
          }}
        >
          <FormElement.Label>Checkbox</FormElement.Label>

          <Switch>{data => <>{JSON.stringify(data)}</>}</Switch>

          <FormElement.Error>{({ message }) => <p style={{ color: "red" }}>{message}</p>}</FormElement.Error>
        </FormElement>
      </Form>
    </div>
  );
}

export default App;
