import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import { type Info, type AdminInfoList } from "./types";
const App = () => {
  const user: Info = {
    id: 1,
    name: "Rahul",
    email: "rahul@gmail.com",
  };
  const admin: AdminInfoList = {
    id: 2,
    name: "Huxn",
    email: "huxn@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };
  return (
    <div>
      <h1>User Info 👇🏻</h1>
      {/* <UserInfo id={1} name="Rahul" email="rahul@gmail.com" /> */}
      {/* 2nd way */}
      <UserInfo user={user} />

      <h1>Admin Info 👇🏻</h1>
      {/* <AdminInfo
        id={10}
        name="Rahul Shamra"
        email="rs@gmail.com"
        role="admin"
        lastLogin={new Date()}
        /> */}

      {/* 2nd way */}
      <AdminInfo admin={admin} />
    </div>
  );
};

export default App;
