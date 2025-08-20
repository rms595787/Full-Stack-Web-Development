import type { MouseEventHandler } from "react";

const EventHandling = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked!", event.target);
  };
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered Div!", event.target);
  };
  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Event Handling</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default EventHandling;
