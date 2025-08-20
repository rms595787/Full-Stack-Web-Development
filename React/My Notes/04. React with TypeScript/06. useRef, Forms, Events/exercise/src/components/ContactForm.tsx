import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
type data = {
  name: string;
  email: string;
};
const ContactForm = () => {
  const [formData, setFormData] = useState<data>({ name: "", email: "" });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submitted", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>

      <section>
        <h1>Name : {formData.name}</h1>
        <h1>Email : {formData.email}</h1>
      </section>
    </form>
  );
};

export default ContactForm;
