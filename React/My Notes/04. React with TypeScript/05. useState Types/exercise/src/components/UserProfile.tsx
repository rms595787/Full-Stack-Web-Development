import { useEffect, useState } from "react";

interface UserProfileState {
  id: number;
  name: string;
  email: string;
}
const UserProfile = () => {
  const [info, setInfo] = useState<UserProfileState>({
    id: 0,
    name: "",
    email: "",
  });
  const updateId = (newId: string) => {
    setInfo({ ...info, id: Number(newId) });
  };
  const updateName = (newName: string) => {
    setInfo({ ...info, name: newName });
  };
  const updateEmail = (newEmail: string) => {
    setInfo({ ...info, email: newEmail });
  };
  return (
    <div>
      <h2>User Info</h2>
      Id :
      <input
        type="number"
        value={info.id}
        onChange={(e) => updateId(e.target.value)}
      />
      <br />
      Name :
      <input
        type="text"
        value={info.name}
        placeholder="Name"
        onChange={(e) => updateName(e.target.value)}
      />
      <br />
      Email :
      <input
        type="email"
        value={info.email}
        placeholder="Email"
        onChange={(e) => updateEmail(e.target.value)}
      />
      <h3>Profile Summary</h3>
      <p>Id : {info.id}</p>
      <p>Name : {info.name}</p>
      <p>Email : {info.email}</p>
    </div>
  );
};

export default UserProfile;
