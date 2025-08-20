// 1st way

// import { type Info } from "../types";
// const UserInfo = ({ id, name, email }: Info) => {
//   return (
//     <ul>
//       <li>Id : {id}</li>
//       <li>Name : {name}</li>
//       <li>Email : {email}</li>
//     </ul>
//   );
// };
// export default UserInfo;

// 2nd way
import { type Info } from "../types";
type UserInfoProp = {
  user: Info;
};
const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <ul>
      <li>Id : {user.id}</li>
      <li>Name : {user.name}</li>
      <li>Email : {user.email}</li>
    </ul>
  );
};

export default UserInfo;
