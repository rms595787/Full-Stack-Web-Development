const ComponentOne = ({ count, onClickHandler }) => {
  const handler = () => onClickHandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handler}>Increment</button>
    </div>
  );
};
export default ComponentOne;
