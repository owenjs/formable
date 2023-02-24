import { useEffect } from "react";
import Input from "ui/Inputs/Input/Input";
import { Form } from "ui";
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
        <Input
          as="div"
          name="firstName"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem"
          }}
        >
          <Input.Label>First Name</Input.Label>

          <Input.Element placeholder="First Name" />

          <Input.Error>{({ message }) => <p style={{ color: "red" }}>{message}</p>}</Input.Error>
        </Input>

        <Input
          as="div"
          name="names"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem"
          }}
        >
          <Input.Label>Names</Input.Label>

          <Input.Textarea />

          <Input.Error>{({ message }) => <p style={{ color: "red" }}>{message}</p>}</Input.Error>
        </Input>

        <Input
          as="div"
          name="options"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem"
          }}
        >
          <Input.Label>Options</Input.Label>

          <Input.Select
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

          <Input.Error>{({ message }) => <p style={{ color: "red" }}>{message}</p>}</Input.Error>
        </Input>
      </Form>
    </div>
  );
}

export default App;
