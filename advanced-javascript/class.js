//Classes are introduced to simply prototype. It is just a syntactical sugar to prototype.
//Lets now convert NewPerson, Superhero functions into classes from main1.js

class NewPerson {
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName(){
        return this.firstName+" "+this.lastName;
    }
}

const p1 = new NewPerson('Bruce', 'Wayne');
console.log(p1.getFullName());

class Superhero extends NewPerson {
    constructor(fName, lName){
        super(fName, lName);
        this.superHero = true;
    }

    fightCrime(){
        console.log("Fight crime");
    }
}

const s1 = new Superhero('Clark', 'Kent');
console.log(s1.getFullName());
s1.fightCrime();