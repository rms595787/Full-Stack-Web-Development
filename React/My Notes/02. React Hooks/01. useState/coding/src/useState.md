# State

State is a way to `store and manage` data that can change over time and affects how the component renders. We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state.

# Hooks

Hooks are a new addition in `React 16.8`. They let you use state and other React features without writing a class.

# useState()

useState Hook allows us to `track state` in a functional component. State generally refers to data or properties that need to be tracking in an application.

- `Sytnax`
- const[data, changeData] = useState()
- data - initial value
- changeData - changed value

# To use state first we have to import useState() in our file

- run command to import useState() in your file
- import {useState} from "react";

# convention developer follows

- if initial state named as - apple, count
- then changed state should be named as - setApple, setCount

# Note - useState returns an array, better use it with destructuring
