console.log("Hello World!");

function calcFactAge(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    if (age >= 0) {
        return age;
    } else {
        return "Impossible year";
    }
}

const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

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

let votesInteresting = 20;
let votesMindblowing = 0;

console.log(votesInteresting === votesMindblowing);
if (votesInteresting === votesMindblowing) {
    alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
    console.log("Interesting fact!");
} else if (votesInteresting < votesMindblowing) {
    console.log("Mindblowing fact!!");
}

// falsy values: 0, "", null, undefined
// truthy value: everything else
if (votesMindblowing) {
    console.log("Mindblowing fact!!");
} else {
    console.log("Not so special...");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
    totalUpvotes > votesFalse
        ? "The fact is true"
        : "Might be false, check more sources...";

alert(message);
