// 1. If you do not specify the type it will take as "any" type of typeScript which will throw error but work

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.isStudent}</h1>
//     </div>
//   );
// };

// 2. To utilize typeScript properly we should specify their types

// const User = (props: { name: string; age: number; isStudent: boolean }) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.isStudent}</h1>
//     </div>
//   );
// };

// 3. Destructuring Data in react with typescript
// {}:{}
// First curly braces are used for destructuring and second curly braces are used specify the types

// const User = ({
//   name,
//   age,
//   isStudent,
// }: {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{isStudent}</h1>
//     </div>
//   );
// };

// 4. We can shape our props by defining their data types at a different place to keep code more readable
// by using typeScript property - Type Aliases
// by using "type" keyword

// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };
// const User = ({ name, age, isStudent }: UserShape) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{isStudent}</h1>
//     </div>
//   );
// };

// 5. Destructuring using interfaces

// interface UserShape {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }
// const User = ({ name, age, isStudent }: UserShape) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{isStudent}</h1>
//     </div>
//   );
// };

// 6. Using Children of User Component as a prompt

// import type { ReactNode } from "react";
// interface UserShape {
//   children: ReactNode;
// }
// const User = ({ children }: UserShape) => {
//   return <div>{children}</div>;
// };

// 7. Old way that we can find in others code to use Props

import type { FC } from "react";
interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
}
const User: FC<UserShape> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  );
};
export default User;
