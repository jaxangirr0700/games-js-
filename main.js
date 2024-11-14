let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

let currentScore1 = document.querySelector(".h4_random2");
let currentScore2 = document.querySelector(".h4_random2");

let score1 = document.querySelector(".user_h1_1");
let score2 = document.querySelector(".user_h1_2");
let span1 = document.querySelector(".h4_random1");
let span2 = document.querySelector(".h4_random2");
let score11 = document.querySelector(".span1");
let score22 = document.querySelector(".span2");
let hold1 = document.querySelector(".hold1");
let hold2 = document.querySelector(".hold2");

let res1 = 0;
let res2 = 0;

btn1.addEventListener("click", () => {
  let score = parseInt(Math.random() * 10);
  span1.textContent = score;
  res1 += score;
  score11.textContent = res1;
  if (res1 >= 100) {
    alert("user1 win!!!");
  }
  if (score === 0) {
    btn1.disabled = true;
    btn2.disabled = false;
    res1 = 0;
    score11.textContent = res1;
  }
  hold1.addEventListener("click", () => {
    btn1.disabled = true;
    btn2.disabled = false;
  });
});
btn2.addEventListener("click", () => {
  let score = parseInt(Math.random() * 10);
  span2.textContent = score;
  res2 += score;
  score22.textContent = res2;

  if (res2 >= 100) {
    alert("user2 win!!!");
  }
  if (score === 0) {
    btn2.disabled = true;
    btn1.disabled = false;
    res2 = 0;
    score22.textContent = res2;
  }
  hold2.addEventListener("click", () => {
    btn2.disabled = true;
    btn1.disabled = false;
  });
});

//
//
//////////////Game RPS///////////////
let rbtn = document.getElementById("rbtn");
let pbtn = document.getElementById("pbtn");
let sbtn = document.getElementById("sbtn");

let choiceUser = document.getElementById("chooseUser");
let choicePc = document.getElementById("choosePc");
let resultDisplay = document.getElementById("result");
let playAgainBtn = document.getElementById("again");

function getRandomChoice() {
  let randomNum = Math.ceil(Math.random() * 3);
  return randomNum === 1 ? "✊" : randomNum === 2 ? "✋" : "✌️";
}

function playGame(userChoice) {
  choiceUser.textContent = userChoice;
  let pcChoice = getRandomChoice();
  choicePc.textContent = pcChoice;

  if (userChoice === pcChoice) {
    resultDisplay.textContent = "Draw!!!";
  } else if (
    (userChoice === "✊" && pcChoice === "✌️") ||
    (userChoice === "✋" && pcChoice === "✊") ||
    (userChoice === "✌️" && pcChoice === "✋")
  ) {
    resultDisplay.textContent = "You win!";
  } else {
    resultDisplay.textContent = "Computer wins!";
  }
}

rbtn.addEventListener("click", () => playGame("✊"));
pbtn.addEventListener("click", () => playGame("✋"));
sbtn.addEventListener("click", () => playGame("✌️"));

playAgainBtn.addEventListener("click", () => {
  choiceUser.textContent = "-";
  choicePc.textContent = "-";
  resultDisplay.textContent = "Let's play";
});

// Omontech///////////////////////////////
//
//
let ul1 = document.querySelector(".ul1");
let ul2 = document.querySelector(".ul2");
let form = document.querySelector("form");

let todo = [
  //   { id: 1, title: "To study React fundamentals", status: "todo" },
  { id: 2, title: "To study React fundamentals", status: "todo" },
  //   { id: 3, title: "To study React fundamentals", status: "todo" },
  //   { id: 4, title: "To study React fundamentals", status: "todo" },
  { id: 5, title: "To study React fundamentals", status: "completed" },
];

const render = () => {
  ul1.textContent = "";
  ul2.textContent = "";
  todo.forEach((e) => {
    if (e.status === "completed") {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = e.title + e.id + "";
      li.classList.add("completed");
      li.prepend(p);
      ul2.prepend(li);
    } else {
      ul1.innerHTML += `
         <li class="todo">
              <p>${e.title}</p>
              <div>
                <button class="button btn-complete">
                  <img src="./imgs/ptichka.png" alt="ptichka" />
                </button>
                <button class="button">
                  <img src="./imgs/korzinka.png" alt="korzinka" />
                </button>
              </div>
            </li>
        `;
    }
  });
};
render();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = e.target[0].value;

  todo.push({
    title: value,
    status: "todo",
    id: new Date().getTime(),
  });
  e.target.reset();
  render();
});
