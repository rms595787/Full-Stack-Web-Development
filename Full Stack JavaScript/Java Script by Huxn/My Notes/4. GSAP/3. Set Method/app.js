// set method sets the properties to the element
gsap.set(".box", {
  opacity: 0.1,
  background: "yellow",
});

gsap.to(".box", {
  background: "teal",
  opacity: 1,
  duration: 1,
  x: 200,
  repeat: -1,
  yoyo: true,
});
