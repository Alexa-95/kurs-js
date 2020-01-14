/////////////////////////////////////////////////
/* PROTOTYPAL INHERITANCE */

// // Person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());

// // Inherit the person prototype method
// Customer.prototype = Object.create(Person.prototype)

// // make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Customer constructor
// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// // Create customer
// const customer1 = new Customer('Tom', 'Smith', '123-456-789', 'Standard');
// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }
// console.log(customer1.greeting());




/////////////////////////////////////////////////
/* CLASSES */


// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting() {
//         return `Helllo from class ${this.firstName} ${this.lastName}`
//     }

//     calculateAge(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);

//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }

//     static addNumbers(x, y){
//         return x + y;
//     }
// }

// const mary = new Person('Mary', 'Williams', '11-12-1980');

// mary.getsMarried('Thompson');
// console.log(mary)
// console.log(Person.addNumbers(1,2))


/////////////////////////////////////////////////
/* SUB CLASSES */

// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greeting() {
//         return `Helllo ${this.firstName} ${this.lastName}`
//     }
// }

// class Customer extends Person {
//     constructor(firstName, lastName, phone, membership){
//         super(firstName, lastName);

//         this.phone = phone;
//         this.membership = membership;
//     }

//     static getMembershipCost(){
//         return 500;
//     }
// }

// const john = new Customer('John', "Doe", "111-222-333", 'premium');
// console.log(john);
// console.log(john.greeting());
// console.log(Customer.getMembershipCost());


/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);

    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();