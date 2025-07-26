import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const [newName, setNewName] = useState("");
  const { updateUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  //   user.UpdateUser("Sharma Ji");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
