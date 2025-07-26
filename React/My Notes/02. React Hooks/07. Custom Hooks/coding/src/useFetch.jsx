// Rules to create a custom hooks
// 1. use 'use' keyword before the name of the function
// ex - useFetch -> here Fetch is the function name and use is the keyword
// Note - it is a convention used by developers

import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []); // passing dependency array [], because we want this component to render only once

  return [data];
};
export default useFetch;

// Now we can use this component anywhere
