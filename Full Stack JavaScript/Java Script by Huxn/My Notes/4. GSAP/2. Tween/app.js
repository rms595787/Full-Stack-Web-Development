// "gsap" is an object which has various methods which we can use to animate our website

// syntax / pseudo code for gsap
// gsap.method(element, vars obj)

// The gsap.to() method animates properties of an object from its current state to a new state over a given duration.
gsap.to(".box", {
  x: 100, // this works as css property - translateX(100px)
  y: 100, // this works as css property - translateY(100px)
  duration: 1.3, // this tells duration we do not have to mention seconds (1s) like this as we used to mention in css
  repeat: -1, // this repeats this animation infinite times
});
