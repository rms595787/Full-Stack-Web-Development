// from: In from method you don't have to specify the initial state ( it will figure out by itself )

gsap.to(".box1", {
  opacity: 0,
  y: -200,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

// fromTo: In fromTo method you HAVE TO specify the default value, and also the new animation state

gsap.fromTo(
  ".box2",
  {
    opacity: 0,
    background: "yellow",
    y: -200,
  },
  {
    opacity: 1,
    background: "teal",
    y: 200,
    duration: 1,
    repeat: -1,
    yoyo: true,
    borderRadius: 0,
  }
);
