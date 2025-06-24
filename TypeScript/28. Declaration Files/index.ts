// console.log(document);

// Using axios library to demostrate more d.ts files
import axios, { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo: ", response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error", error.message);

      if (error.response) {
        console.log("Status: ", error.message);
        console.log("Data: ", error.response.data);
      }
    } else {
      console.log("Error", error.message);
    }
  }
};

fetchData();
