function AboutMe()
{console.log("my name is Debisma");
console.log("I am 20 years old");
console.log("I am student of 2nd year computer science and engineering department");

console.log("I love watching horror and thriller movies");
}
let a = 7;
console.log(a++);
console.log(++a);
 AboutMe();
 var arr = [1,2,3,4];
 arr.splice(2,2);
 console.log(arr);

 var bag = {
    brand : "lavie",
    color : "black",
    price : "2k",
    type : "Tote",

 }

 for(let i=0; i<Object.keys(bag).length;i++){
   console.log("The bag is of " + Object.keys(bag)[i] +" " + bag[Object.keys(bag)[i]])
 }

 function abcd(){
     for(var i =0; i<12;i++){
        console.log(i);
     }
   
 }
 abcd();

 var obj = {

Name : "ponkhi",
Class : "12",
    
 };
 
 var copyobj = {...obj}
 console.log(copyobj);

 if("ponkhi"){
    console.log("hii");

 }
 else{
    console.log("hello");
 }

 var arr = [1,2,3,4,5]; 

 arr.forEach(function(val){
    console.log(2*val);
 })
// for in loop. loops through the keys of an object.
 var info = {
    Name : "ponkhi",
    age : 21,
    city : "NL",
 
 }
 for(var key in info){
    console.log("My " + key + " is " + info[key] );
 }
 
//  for of loop. Loops through values of an object
for (let b of "Ponkhi"){
   console.log(b)
}

 setTimeout(function(){
    console.log("run the code after 5 seconds");
 },5000);

 // 7 built in primitive datatypes are - NNSSBBU . Null number string symbol boolean bigint undefined
//  kjhihkjefkewufhisfksdjsldfuwiuu

// Math.round() is used to round off something

function avg(x,y){
   console.log("here is the average ");
   console.log( (x + y)/2);
}
let x = 25;
let y = 25;

avg(x,y);

const hello = ()=>{
   console.log("hiiiii");
}
hello();

function mean(s,t,u,v){
   console.log("Mean is " + (s+t+u+v)/5);
}

let s = 4
let t = 6
let u =7
let v =9
mean(s,t,u,v);

// using arrow function

const Mean = (s,t,u,v)=>{
   console.log("Mean is " + (s+t+u+v)/5)
}
Mean(s,t,u,v);

// template literals use bactics. We can directly insert variable in template literals.
// here ${} sign within `` directly access ponkhi and debisma rather than printing girl1 and girl2 as it is.
// called string interpollation
let girl1 = 'Ponkhi'  
let girl2 = 'Debisma'
let sentence = `${girl1} is the nickname of ${girl2}`;
console.log(sentence);


// try to print 'Nick O'neal'.-> Escape sequence chracter
let abc = 'Ponkhi';
console.log(abc);
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());
console.log(abc.slice(3,5));
console.log(abc.replace("Pon", "Pan"));

let def = '    ponkhi  '
console.log(def.trim());
// trim is used to cut the spaces