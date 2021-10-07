{/* <button id="addDice">Add Dice</button>
<button id="rollDice">Roll Dice</button>
<button id="sumDice">Sum Dice</button> */}


const diceContainer = document.getElementById('diceContainer')
const addDice = document.getElementById("addDice");
const rollDice = document.getElementById("rollDice");
const sumDice = document.getElementById("sumDice");


let diceArr = [];
let uniArray = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

class Die {
    constructor() {
        this.value = (Math.floor(Math.random() * 6) + 1);
        this.dice = document.createElement("div");
        this.dice.className = 'dice';
        // this.dice.textContent = this.value;
        if (this.value == 1) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 2) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 3) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 4) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 5) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 6) {
            this.dice.textContent = uniArray[this.value -1]
        }
        diceArr.push(this);
        console.log(diceArr)
        diceContainer.appendChild(this.dice);
        this.dice.addEventListener('click', () => this.roll())
        this.dice.addEventListener("dblclick", () => {
            diceContainer.removeChild(this.dice);
            let index = diceArr.indexOf(this);
            diceArr.splice(index, 1)
        })
    };

    roll = () => {
        this.value = (Math.floor(Math.random() * 6) + 1);
        // this.dice.textContent = this.value       
        if (this.value == 1) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 2) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 3) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 4) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 5) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 6) {
            this.dice.textContent = uniArray[this.value -1]
        } 
    };
};


addDice.addEventListener("click", () => {
    new Die();
});

rollDice.addEventListener("click", () => {
    diceArr.forEach(pizza => {
        pizza.roll();
    });
});

sumDice.addEventListener("click", () => {
    let sum = 0;
    diceArr.forEach(PizzaRoll => {
        sum += PizzaRoll.value
        // sum = sum + pizzaRoll.value
    });
    alert(sum)
});