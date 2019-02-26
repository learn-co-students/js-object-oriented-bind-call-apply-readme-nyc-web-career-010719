function greet(customerOne) {
  console.log(`Hi ${customerOne}, my name is ${this.name}, hi!`);
}

greet();

let person = {
  name: 'Bob',
  greet: greet
};

person.greet();

let sally = { name: 'Sally' };

greet.call(sally, 'Terry', 'George');

greet.apply(sally, ['Terry', 'George']);

let newGreet = greet.bind(sally);

newGreet('Bob');

greet('Bob');


class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    matchInterests(event) {
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function
        );
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);
