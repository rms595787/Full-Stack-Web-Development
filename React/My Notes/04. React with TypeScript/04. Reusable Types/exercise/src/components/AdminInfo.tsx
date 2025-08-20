// 1st way

// import { type AdminInfoList } from "../types";

// const AdminInfo = ({ id, name, email, role, lastLogin }: AdminInfoList) => {
//   return (
//     <ul>
//       <li>Id : {id}</li>
//       <li>Name : {name}</li>
//       <li>Email : {email}</li>
//       <li>Role : {role}</li>
//       <li>Last Login : {lastLogin.toLocaleString()}</li>
//     </ul>
//   );
// };

// export default AdminInfo;

// 2nd way

import { type AdminInfoList } from "../types";
type AdminInfoProp = {
  admin: AdminInfoList;
};
const AdminInfo: React.FC<AdminInfoProp> = ({ admin }) => {
  return (
    <ul>
      <li>Id : {admin.id}</li>
      <li>Name : {admin.name}</li>
      <li>Email : {admin.email}</li>
      <li>Role : {admin.role}</li>
      <li>Last Login : {admin.lastLogin.toLocaleString()}</li>
    </ul>
  );
};
export default AdminInfo;
