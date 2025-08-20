// // Using Normal way of using type (Repeating ourselves)
// type AUser = {
//   name: string;
//   email: string;
//   age: number;
//   location: string[];
//   admin: string;
// };

// By using the same type which we have already created
// Increase reusability, reduces repeatetion of code
import { type User } from "./UserInfo";
type AUser = User & { admin: string };
const AdminInfo = ({ name, email, age, location, admin }: AUser) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
      <li>admin : {admin}</li>
    </ul>
  );
};

export default AdminInfo;
