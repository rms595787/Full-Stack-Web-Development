import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>User Info👇🏻</h1>
      <UserInfo
        name="Huxn WebDev"
        email="huxnWebDev@gmail.com"
        age={21}
        location={["Earth", "U.S.A."]}
      />
      <h1>Admin Info👇🏻</h1>
      <AdminInfo
        name="Rahul"
        email="rahul.sharma@gmail.com"
        age={20}
        location={["Earth", "India"]}
        admin="true"
      />
    </div>
  );
};

export default App;
