import useInput from "../hooks/useInput";

const FormComponent = () => {
  const name = useInput("");
  const email = useInput("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name.value}, Email: ${email.value}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" {...name} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" {...email} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FormComponent;
