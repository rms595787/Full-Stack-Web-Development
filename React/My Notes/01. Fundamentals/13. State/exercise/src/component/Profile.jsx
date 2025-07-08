import { useState } from "react";
// Using Object of Data way of using useState
// 1st way - using form
const Profile = () => {
  const [user, setUser] = useState({
    name: "Rahul",
    age: 19,
  });
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInput.trim() && ageInput.trim()) {
      setUser({ name: nameInput, age: ageInput });
      setNameInput("");
      setAgeInput("");
    }
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAgeInput(e.target.value);
  };

  return (
    <div>
      <h1>Name : {user.name}</h1>
      <h2>Age : {user.age}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameInput}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={ageInput}
          onChange={handleAgeChange}
          placeholder="Enter you age"
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

// // 2nd way - using label with input
// const Profile = () => {
//   const [user, setUser] = useState({
//     name: "",
//     age: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };
//   return (
//     <div>
//       <h2>User Profile</h2>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={user.name}
//             name="name"
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={user.age}
//             onChange={handleChange}
//             placeholder="Enter your age"
//           />
//         </label>
//       </div>

//       <h2>Profile Information</h2>
//       <p>Name : {user.name}</p>
//       <p>Age : {user.age}</p>
//     </div>
//   );
// };

export default Profile;
