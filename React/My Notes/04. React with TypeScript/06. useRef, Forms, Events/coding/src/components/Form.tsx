import { useRef, useState, type FormEvent } from "react";
type FormData = {
  name: string;
  email: string;
  password: string;
};
const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Note we have to use (!) with current.value since current value is null it will throw error
    //  name.current!.value -> this line can never be null or undefined (because we used ! operator here)
    const nameValue = name.current!.value; // the name we are storing which is not currently stored in name
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>
      <section>
        <h1>Name : {submittedData.name}</h1>
        <h1>Email : {submittedData.email}</h1>
        <h1>Password : {submittedData.password}</h1>
      </section>
    </form>
  );
};

export default Form;
