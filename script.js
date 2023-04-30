const fact = [`Lisbon is the capital of Portugal`, 2015, true, "something"];
console.log(fact);
console.log(fact[0]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(createdIn);

const newFact = [...fact, "society"];
console.log(newFact);

const factObj = {
    text: "Lisbon is the capital of Portugal",
    category: "society",
    createdIn: 2015,
    isCorrect: true,
    createSummary: function () {
        return `The fact "${
            this.text
        }" is from the category ${this.category.toUpperCase()}`;
    },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());
