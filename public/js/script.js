const myButton = document.getElementById('btn');
myButton.onclick = function() {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

//Variables
const pi = 3.142;
let name = 'Adjoa Appiah'
let age = 194;
let present = false;
console.log(name);

//Objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentley',
    color: 'White',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Adjoa',
        driver: {
            name: 'Erica',
        }
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car.owner.driver.name = 'Kayz'
console.log(car.owner.driver.name);


//Arrays
const tweet1 = {
    text: 'I am learning js today',
    likes: 5,
    shares: 2,
    retweet: 1,
}
const tweet2 = {
    text: 'I am learning arrays today',
    likes: 8,
    shares: 3,
    retweet: 0,   
}
const tweets = [];
tweets.push(tweet1);
tweets.push(tweet2):
tweets.length;
tweets;

//Dates
const today = new Date();
today,toString();
today.toLocaleDateString();
today.getHours();

//If/Else
if (today.getHours() >= 16) {
    console.log('Class has ended');
} else{
   console.log('Class is in session');
}

//For Loop
for (let i =0; i <=10; i++) {
    console.log('Notify friends!', i);
}

//Funtions
//Defining funtions
function login(username, password) {
    if(username == 'AJ-Appiah' && password == '1234') {
        return 'user is logged in!';
    }else if (username != 'AJ-Appiah') {
        return 'Invalid username!'
    }else if (password != 'AJ-1234') {
        return 'Invalid password'
    }else {
        return 'Invalid username or password!';
    }
}
//Invoking functions
login('AJ-Appiah', '1234');

//Basic Arithmetic
12+34;
45-14;
7*12;
78/4;
78 % 4;

//Comparison
2 === 2;
3 !== 3;
3 !== 2;
//Built-in Math Functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);

// Order of operations
1 * 2 + 3 - 4 / 2 + 2**2;

//Handling user inputs
1200 + Number('250');
1200 - '250';

//String Concatenation
const firstname = 'Erica';
const lastname = 'Appiah';
firstname.trim() +'' + lastname.trim();

//Template literal
`${firstname.trim()} ${lastname.trim}`;

//String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim}`.length;
(firstname.trim() + '' + lastname.trim()).length;
firstname.toUpperCase()
lastname.charAt(0)
`${firstname.trim()} ${lastname.trim()}`.charAt(8);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

//String conversion
String(2014);



  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  












