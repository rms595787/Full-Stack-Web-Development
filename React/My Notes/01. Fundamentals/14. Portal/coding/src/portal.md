# Portal

Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component. This can be useful for scenarios like `modals, tooltips, or dropdowns,` where you want to break out of the usual parent-child structure and render in a different part of the DOM.

# To use Portal

- import portal in jsx file use command
- `import {createPortal} from "react-dom"`

- select which component you want to create protal of and place `createPortal` keyword in front return keyword
- Example `return createPortal <div></div>`

- create div or any parent tag in `index.html` main file which you want to be parent of that protal component
- use select command to specify the parent for component `in component file.`
- Example `return createPortal <div></div>, document.querySelector("#popup-content")`
