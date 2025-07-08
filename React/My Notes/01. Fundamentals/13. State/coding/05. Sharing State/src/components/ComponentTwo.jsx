const ComponentTwo = ({ count, onClickHandler }) => {
  const handler = () => onClickHandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handler}>Decrement</button>
    </div>
  );
};
export default ComponentTwo;
