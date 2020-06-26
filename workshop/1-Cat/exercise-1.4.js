// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

class Cat {
    constructor(name, breed) {
        this.species = 'cat';
        this.tiredness = 50;
        this.hunger = 50;
        this.loneliness = 50;
        this.happiness = 50;
        this.breed = breed;
        this.name = name;
    }
// Create the arrow function for sleep.
    sleep = (hours) => {
        this.tiredness -= hours * 5;
        this.happiness += hours * 1;
    }
// Create the arrow function for eat.
    eat = (kibbles) => {
        this.hunger -= (kibbles * 1) / 5;
        this.happiness += (kibbles * 1) / 10;
    }
// Create the arrow function for play.
    play = (minutes) => {
        this.loneliness -= minutes * 3;
        this.happiness += minutes * 5;
    }
// Create the arrow function for wait.
    wait = (minutes) => {
        this.tiredness += minutes * 2;
        this.hunger += minutes * 4;
        this.loneliness += minutes * 2;
        this.happiness -= minutes * 2;
    }
}

const boots = new Cat('boots', 'siamese');

// B) Make Boots wait 20 minutes and call then console.log(boots);

boots.wait(20);

console.log(boots);
