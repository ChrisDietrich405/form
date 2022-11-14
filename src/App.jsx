import { useEffect, useState } from "react";
import "./App.css";
import FormInput from "./FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "should be 3-15, but no special characters",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]${3,15}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "it should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "should be at least 8-16 characters and include a letter, a number and a special character",
      label: "Password",
      required: true,
      pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,16}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    console.log(e);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
