function AboutMe()
{console.log("my name is Debisma");
console.log("I am 20 years old");
console.log("I am student of 2nd year computer science and engineering department");

console.log("I love watching horror and thriller movies");
}
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

 bag.price = "3k";

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

 var info = {
    Name : "ponkhi",
    age : 21,
    city : "NL",

 }
 for(var key in info){
    console.log(info[key] );
 }
 
 setTimeout(function(){
    console.log("run the code after 5 seconds");
 },5000);
 