// Normally we define type like this, But if we use like this and we have to same properties in some other component we must repeat ourselve and create same type with extended features

// type User = {
//   name:string;
//   email:string;
//   age:number;
//   location:string[];
// }

// To prevent ourselves from repeating we use "export" keyword and export this type and we can use it wherever we want in any component by "import" them
export type User = {
  name: string;
  email: string;
  age: number;
  location: string[];
};

const UserInfo = ({ name, email, age, location }: User) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
    </ul>
  );
};

export default UserInfo;
