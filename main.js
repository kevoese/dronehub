
/*

var p = {x: 5, y:6};
//o = Object.create(p);
 //var o = {z: 0, a: 9};

 function inherit(p) {
if (p == null) throw TypeError(); // p must be a non-null object
if (Object.create) // If Object.create() is defined...
return Object.create(p); // then just use it.
var t = typeof p; // Otherwise do some more type checking
if (t !== "object" && t !== "function") throw TypeError();
function f() {}; // Define a dummy constructor function.
f.prototype = p; // Set its prototype property to p.
return new f(); // Use f() to create an "heir" of p.
}
 var o = {
 	a: 8,
 	b: 9,
 	get summer(){
 		return (this.a*this.a + this.b*this.b);
 	},
 	
	set summer(newvalue)
	{
	   var oldvalue = (this.a*this.a + this.b*this.b);s
	   var ratio = newvalue/oldvalue;
	   this.a = this.a*ratio;
	   this.b = this.b*ratio;
	}
 	
 };


 o.x = 7;
 o.y = 8;
 
 for (i in o)
  console.log(i);
console.log(Object.getOwnPropertyDescriptor(o, "summer"));

//console.log(o.summer);
//o.summer();
//console.log(o.summer);

class ShoppingCart{
  constructor(){
     var total = 0;
     var items = {};
  }
    
    addItem(itemName, quantity, price) {
      
      this.items[itemName] = quantity;
      this.total += price; 
    }
      
    removeItem(itemName, quantity, price) {
      if( quantity > items[itemName])
        delete  items[itemName];
      else
        this.items[itemName]-=quantity;
      this.total-= price;
    }
      checkout(cashPaid)
      {
          if(cashPaid < total)
            return "Cash paid not enough";
          else
            return this.total - cashPaid;
      }
}

class Shop extends ShoppingCart{
  constructor(){
    quantity = 100;
  }
    removeItem() {
      quantity--;
    }


}
cart = new ShoppingCart();

//cart.addItem('Mango', 3, 10)
class me{
	constructor(){
		this.jude = {};
}
   show() {
   this.jude["job"] = "engr";
   this.jude["gender"] = "male";
   this.jude["work"] = "programmer";
   console.log(this.jude);
	}
}

ki = new me();
ki.show();

/**
 * Using ES6-style classes
 * See below for an alternative ES5-prototype solution setup
 */

 /*
class User {
  constructor(name) {
    let _thename = name;
    this.setNamefxn = function(name) { _thename = name; }
    this.getNamefxn = function() { return _thename; }
    //this.name = name;
    //this.loggedIn = false;
    var loggedIn = false;
    this.loginSet = function() { loggedIn = true; }
    this.loginUnset = function() { loggedIn = false; }
    this.islog = function() { return loggedIn; }
    this.lastLogInAt = null;
    this.comment = {};
  }
  isLoggedIn() {
    return this.islog();
  }
  
  getLastLoggedInAt() {
    return this.lastLogInAt;
  }
  
  logIn() {
    this.loginSet();
    this.lastLogInAt = new Date();
  }
  
  logOut() {
    this.loginUnset();
  }
  
  getName() {
    return this.getNamefxn();
  }
  
  setName(name) {
    this.setNamefxn(name);
  }
  
  canEdit(comment) {
    this.comment = new Comment(this.name, comment,  null);
  }
  
  canDelete(comment) {
    return false;
  }
}

class Moderator extends User{
  constructor(name)
  {
    super(name);
  }
  
  canEdit(comment) {
    this.comment = new Comment(this.name, comment,null);
  }
  
  canDelete(comment){
    delete this.comment;
  }
}

class Admin extends Moderator{
  constructor(name)
  {
    super(name);
  }
  
  canEdit(comment) {
    this.comment = new Comment(this.name, comment, null);
  }
  
  canDelete(comment){
    delete this.comment;
  }
}

class Comment {
  constructor(author, message, repliedTo) {
    this.author = author;
 
    var _commentMessage = message;
    this.setmessagefxn = function(message) { _commentMessage = message; }
    this.getmessagefxn = function() { return _commentMessage; }
    this.repliedTo = repliedTo;
    this.createdAt = new Date();
  }
  getMessage() {
    return this.getmessagefxn();
  }
  
  setMessage(message) {
    this.setmessagefxn(message);
  }
  
  getCreatedAt() {
    return this.createdAt;
  }
  
  getAuthor() {
    return this.author;
  }
  
  getRepliedTo() {
    return this.repliedTo;
  }
  toString() {
      return this.message  " by " this.author;
  }
}

/**************************
 * Alternative using ES5 prototypes
 * Or feel free to choose your own solution format
 ************************
 
function User(name) {}
User.prototype = {
  isLoggedIn: function() {}
  getLastLoggedInAt: function() {}
  logIn: function() {}
  logOut: function() {}
  getName: function() {}
  setName: function(name) {}
  canEdit: function(comment) {}
  canDelete: function(comment) {}
}

var Admin = ???

var Moderator = ???

function Comment(author, message, repliedTo) {}
Comment.prototype = {
  getMessage: function() {}
  setMessage: function(message) {}
  getCreatedAt: function() {}
  getAuthor: function() {}
  getRepliedTo: function() {}
  toString: function() {}
}
***************************/
/*

class User {
  constructor(name) {
    var _name = name;
    this.setName = function(name) { _name = name; }
    this.getName = function() { return _name; }
    //this.name = name;
    //this.loggedIn = false;
    var loggedIn = false;
    this.setlog = function() { loggedIn = true; }
    this.unsetlog = function() { loggedIn = false; }
    this.log = function() { return loggedIn; }
    this.lastLogInAt = null;
    this.comment = {};
  }
  isLoggedIn() {
    return this.log();
  }
  
  getLastLoggedInAt() {
    return this.lastLogInAt;
  }
  
  logIn() {
    this.setlog();
    this.lastLogInAt = new Date();
  }
  
  logOut() {
    this.unsetlog();
  }
  
  getName() {
    return this.getName();
  }
  
  setName(name) {
    this.setName(name);
  }
  
  canEdit(comment) {
      if(comment.author.getName() === this.getName()) {
      return true;
    }
    return false;
  }
  
  canDelete(comment) {
    return false;
  }
}

class Moderator extends User{
  constructor(name)
  {
    super(name);
  }
  
  canDelete(comment){
    return true;
  }
}

class Admin extends Moderator{
  constructor(name)
  {
    super(name);
  }
  
  canEdit(comment) {
    return true;
  }

}

class Comment {
  constructor(author, message, repliedTo = null) {
    this.author = author;
    //this.message = message;
    var _message = message;
    this.setmessage = function(message) { _message = message; }
    this.getmessage = function() { return _message; }
    this.repliedTo = repliedTo;
    this.createdAt = new Date();
  }
  getMessage() {
    return this.getmessage();
  }
  
  setMessage(message) {
    this.setmessage(message);
  }
  
  getCreatedAt() {
    return this.createdAt;
  }
  
  getAuthor() {
    return this.author;
  }
  
  getRepliedTo() {
    return this.repliedTo;
  }
  toString() {
    if(this.repliedTo === null) {
        return this.getmessage() + " by " + this.author.getName();
     }
         return this.getmessage() + " by " + this.author.getName() + " (replied to " + this.repliedTo.author.getName() + ")"
  }
}


*/

const toBinaryStr = (num) => {
	if(num < 2)
		return (num % 2) + "";
     return toBinaryStr(Math.floor(num/2)) + num%2;
};

const secretHandShake = (num) => {
	if(typeof (num) !== "number")
		return "Please Enter a Number";
    
    let value     = toBinaryStr(num % 16)
	let arr 	  = ["wink", "double blink", "close your eyes", "jump"];
    let handshake = [];

	for(let i = 0; i < value.length ; i++)
		if(value[value.length - 1 -i] === '1')
			handshake.push(arr[i]);
	
	if(num < 16) 
		return handshake; 
    else 
    	return handshake.reverse(); 
};


//console.log(secretHandShake(234));

const scrabbleScore = (word) => {
	let score    = 0;
	let scrabble = {};
	let alpha    = ["AEIOUNLRST", "DG", "BCMP", "FHVWY", "K", "JX", "QZ"];
	let mark 	 = [1, 2, 3, 4, 5, 8, 10];
	for(let j = 0; j < 7; j++)
		for(let i = 0; i < alpha[j].length ; i ++)
			scrabble[alpha[j][i]] = mark[j];

	for(let i of word.toUpperCase()){
		score += scrabble[i];
	}
	console.log(scrabble);
	return score;
}

console.log(scrabbleScore("kelvin"));

const factorial = (num) => {
	if(num < 2)
		return 1;
	return num * factorial(num - 1);
}

console.log(factorial(5));

const pascal = (num) => {
	arr = [];
	for(let i = 0; i <= num ; i++){
		arr.push(factorial(num)/(factorial(i) * factorial(num - i)))
	}
	return arr;
}

const pascalTriangle = (num) => {
	let str = "";
	for(let i = 0; i <= num ; i++)
		str += pascal(i).join(",") + '\n';
	return str;
	
}

console.log(pascalTriangle(5));


