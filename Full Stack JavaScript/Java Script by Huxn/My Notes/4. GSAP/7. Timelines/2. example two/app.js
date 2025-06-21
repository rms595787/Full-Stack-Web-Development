var tl = gsap.timeline({
  defaults: {
    duration: 1,
    delay: 0.2,
  },
});

tl.to("h1", {
  color: "white",
  y: -100,
})
  .to(".box1", {
    background: "lightpink",
    x: -100,
  })
  .to(".box2", {
    background: "purple",
    y: 100,
  })
  .to(".box3", {
    background: "crimson",
    x: 100,
  });
