import { useEffect } from "react";
import Input from "ui/Inputs/Input/Input";
import { Form } from "ui";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const methods = useForm({
    defaultValues: {
      firstName: ""
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
      <Form methods={methods}>
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
      </Form>
    </div>
  );
}

export default App;
