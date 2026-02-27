const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-avater");
const username = document.querySelector(".username");
const twitterhandle = document.querySelector(".twitter-handle");

const testimonials = [
  {
    name: "Ben Furfie",
    position: "@frontendben",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: `I've been writing CSS for over 20 years, and up until 2017, the way I
            wrote it changed frequently. It's not a coincidence Tailwind was
            released the same year. It might look wrong, but spend time with it and
            you'll realise semantic CSS was a 20 year mistake.`,
  },
  {
    name: "Guillermo Rauch",
    position: "@rauchg",
    photo:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    text: "If I had to recommend a way of getting into programming today, it would be HTML + CSS with @tailwindcss The RoI is just incredible. This responsive demo is just ~21 custom CSS props. The whole thing is mostly built-in tailwind classes and vanilla HTML.",
  },
  {
    name: "Dacey Nolan",
    position: "@dacey_nolan",
    photo:
      "https://pbs.twimg.com/profile_images/1356685491127656449/db8jKmuZ_400x400.jpg",
    text: "I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.",
  },
  {
    name: "Sarah Dayan",
    position: "@frontstuff_io",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling.",
  },
  {
    name: "Igor Randjelovic",
    position: "@igor_randj",
    photo:
      "https://pbs.twimg.com/profile_images/970109919444824064/X0XU8ZD9_400x400.jpg",
    text: "Tailwind clicked for me almost immediately. I can't picture myself writing another BEM class ever again. Happy user since the first public release! Productivity is at an all time high, thanks to @tailwindcss",
  },
  {
    name: "Dan Malone",
    position: "@ohhdanm",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "CSS has always been the hardest part of offering a digital service. It made me feel like a bad developer. Tailwind gives me confidence in web development again. Their docs are my first port of call.",
  },
  {
    name: "Sergio Peris",
    position: "@sertxudev",
    photo:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "I thought 'Why would I need Tailwind CSS? I already know CSS and use Bootstrap', but after giving it a try I decided to switch all my projects to Tailwind.",
  },
  {
    name: "marckohlbrugge.eth",
    position: "@marckohlbrugge",
    photo:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Before Tailwind CSS I was banging my head against the wall trying to make sense of my CSS spaghetti. Now I am banging my head against the wall wondering why I didn't try it earlier. My head hurts and my wall has a big hole in it. But at least using CSS is pleasant again!",
  },
];

let counter = 1;

function showNextTestimonial() {
  const { name, position, photo, text } = testimonials[counter];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  twitterhandle.innerHTML = position;

  counter++;

  if (counter > testimonials.length - 1) {
    counter = 0;
  }
}

setInterval(showNextTestimonial, 5000);
