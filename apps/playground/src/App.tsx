import { useEffect } from "react";
import { Form, FormElement } from "ui";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      names: "Asda",
      options: "default"
    }
  });

  useEffect(() => {
    methods.setError("firstName", {
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
                value: "1",
                label: "1"
              },
              {
                value: "2",
                label: "2"
              }
            ]}
            renderOption={({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            )}
          />

          <FormElement.Error>{({ message }) => <p style={{ color: "red" }}>{message}</p>}</FormElement.Error>
        </FormElement>
      </Form>
    </div>
  );
}

export default App;
