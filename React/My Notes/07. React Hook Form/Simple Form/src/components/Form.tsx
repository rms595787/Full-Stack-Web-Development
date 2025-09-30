import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}
const Form = () => {
  // register: is used to connect input fields to the form.
  // handleSubmit: is a function to handle form submission.
  // errors: contains validation errors for the form.
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })} // here we are calling register function from useForm, it takes parameter "name" and validation rule which we send inside of it {required: "Name is required"}
        />

        {/* now we will throw error if input field name gives any error */}
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be atleast 8 characters",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>{" "}
      {/* disabled when form is submitting */}
    </form>
  );
};

export default Form;
