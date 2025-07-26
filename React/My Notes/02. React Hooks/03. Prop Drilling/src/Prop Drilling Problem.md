# Prop Drilling Problem ( One of the famous problems of JS )

- Inside main App we have different components

- Header
- - Nav

- Card
- - Users
- - - Date
- - - Time

- if you want to pass the `Data` which you have in your `App` component into `Date` component
- - ways to do that in react.js
- - - By using Zustand
- - - By using context api
- - - By using redux toolkit

# Here in `prop drilling` we `use Props` to pass data in different components

`Note`

- companies like google, microsoft have 1000 or millions of components for that we use
