# Reusable types

We normally define type like this

```tsx
type User = {
  name: string;
  email: string;
  age: number;
  location: string[];
};
```

We just have to add `export` keyword in front of type to make it `reusable`

```tsx
export type User = {
  name: string;
  email: string;
  age: number;
  location: string[];
};
```

Using in another component, when we are importing this in another component `it is not necessary` to write `type` keyword, you can `use for you own clarity`
- you must always use `type` for keep yourself safe from any kind of error

```tsx
import { type User } from "./UserInfo"; // importing the type which we have already created
type AUser = User & { admin: string }; // extended features
```
