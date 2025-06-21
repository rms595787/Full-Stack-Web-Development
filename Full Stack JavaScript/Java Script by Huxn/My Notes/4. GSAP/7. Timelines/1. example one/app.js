// timeline

// // 1st example of timeline
// var tl = gsap.timeline();

// tl.to(".box1", {
//   duration: 2,
//   scale: 0,
//   opacity: 0,
//   delay: 0.2,
// })
//   .to(".box2", {
//     duration: 2,
//     x: -200,
//     delay: 0.5,
//   })
//   .to(".box3", {
//     duration: 2,
//     x: -200,
//     borderRadius: 0,
//     rotate: 720,
//     delay: 1,
//   })
//   .set(".box1", {
//     duration: 2,
//     scale: 1,
//     opacity: 1,
//   });

// 2nd example of timeline - using default values in timeline

var tl = gsap.timeline({
  defaults: {
    duration: 1,
    delay: 0.2,
  },
});

tl.to(".box1", {
  scale: 0,
  opacity: 0,
})
  .to(".box2", {
    x: -200,
  })
  .to(".box3", {
    x: -200,
    rotate: 720,
    borderRadius: 0,
  })
  .set(".box1", {
    scale: 1,
    opacity: 1,
  })
  .to(".box1", {
    x: 200,
  });
