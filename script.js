console.log("Hello World!");

function calcFactAge(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    if (age >= 0) {
        return age;
    } else {
        return `Impossible year. Year needs to be less or equal ${currentYear}`;
    }
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

const calcFactAge2 = (year) =>
    year <= new Date().getFullYear()
        ? new Date().getFullYear() - year
        : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;
console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));
