const game = { timer: 0, start: null };

// create message element
const message = document.createElement("div");
message.classList.add("message");
message.textContent = "Press To Start";
document.body.prepend(message);

// create a box
const box = document.createElement("div");
box.classList.add("box");

const output = document.querySelector(".output");
output.append(box);

box.addEventListener("click",()=>{
    box.textContent = "";
    box.style.display = "none"
    game.timer = setTimeout(addBox, randomNumber(3000));
    if(!game.start){
        message.textContent = "Watch for element and click it"
    }else{
        const current = new Date().getTime();
        const duration = (current - game.start)/1000;
        message.textContent = `It took ${duration} seconds to click`;
    }
})

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function addBox() {
  game.start = new Date().getTime();
  const container = output.getBoundingClientRect();
  const dim = [randomNumber(50) + 20, randomNumber(50) + 20];
  box.style.display = "block";
  box.style.width = `${dim[0]}px`;
  box.style.height = `${dim[1]}px`;
  box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
  box.style.left = randomNumber(container.width - dim[0]) + "px";
  box.style.top = randomNumber(container.height - dim[1]) + "px";
  box.style.borderRadius = randomNumber(50) + "%";
}
