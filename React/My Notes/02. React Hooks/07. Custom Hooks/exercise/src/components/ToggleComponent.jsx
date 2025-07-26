import useToggle from "../hooks/useToggle";
const ToggleComponent = () => {
  const [isToggled, toggle] = useToggle();
  return (
    <div>
      <button onClick={toggle}>{isToggled ? "Hide" : "Show"} Message</button>
      {isToggled && <p>This is a Toggled Message!</p>}
    </div>
  );
};
export default ToggleComponent;
