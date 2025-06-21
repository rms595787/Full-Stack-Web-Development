// staggers
gsap.set(".box", {
  background: "yellow",
  opacity: 0.1,
  borderRadius: 0,
});

gsap.to(".box", {
  background: "white",
  opacity: 1,
  borderRadius: 100,
  y: -100,
  duration: 1,
  repeat: -1,
  yoyo: true,
  stagger: {
    amount: 1, // total amount taken in animation
    each: 0.125, // each tells the amount of time requried on 1 element
    from: 0, // it tells the position from where we want to begin the animation
  },
});
