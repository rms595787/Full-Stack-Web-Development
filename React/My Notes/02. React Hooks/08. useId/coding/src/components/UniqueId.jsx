import { useId } from "react";

const UniqueId = () => {
  //   // first way to use useId
  //   const id = useId(); // If you use one id everywhere it will give the same id to every element
  //   return (
  //     <div>
  //       <label htmlFor={id}>
  //         Email:
  //         <input type="text" id={id} />
  //       </label>
  //       {/* You can check the id in both elements is same in inspect element */}
  //        <br />
  //       <label htmlFor={id}>
  //         Name:
  //         <input type="text" id={id} />
  //       </label>
  //     </div>
  //   );

  //   // second way to use useId - if you want to work with different ids, you can create them manually
  //   const id = useId();
  //   const id2 = useId();

  // //   now we will get different id for id and id2
  //   return (
  //     <div>
  //       <label htmlFor={id}>
  //         Name:
  //         <input type="text" id={id} />
  //       </label>
  //       <br />
  //       <label htmlFor={id2}>
  //         Email:
  //         <input type="email" id={id2} />
  //       </label>
  //     </div>
  //   );
  // };

  // third and most efficient way to work with useId
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-Name`}>Name:</label>
      <input type="text" id={`{id}-Name`} />
      <br />
      <label htmlFor={`${id}-Email`}>Email:</label>
      <input type="email" id={`${id}-Email`}></input>
    </div>
  );
};
export default UniqueId;
