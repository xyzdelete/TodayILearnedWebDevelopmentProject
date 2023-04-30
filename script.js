console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "close";
    } else {
        form.classList.add("hidden");
        btn.textContent = "share a fact";
    }
});

let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.53ccc"));

function calcFactAge(year) {
    const currentYear = new Date().getFullYear();
    // 2022 - 2015
    const age = currentYear - year;
    return age;
}

const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
