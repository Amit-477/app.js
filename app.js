
// let DATA = "secret information";

// class User {
//     constructor(name,email)
//     {
//         this.name = name;
//         this.email = email;

//     }

//     viweData() {
//         console.log( "data = ", DATA );
        
//     }
// }

// class Admin extends User {
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA="some nwe vlue";
//     }
// }

// let student1 = new User("amit" , "abcd@email.com");
// let student2 = new User("banik" , "banik@email.com" );

// let teacher1 = new User("bhola" , "bhola@college.com");

// let admin1 = new Admin("admin" , "admin@`colege.com");

// method 1

// function hello(){
//     console.log("hello");
    
// }

// setTimeout(hello,5000);

// Method 2

// setTimeout(()=>{
//     console.log("hello");
    
// } ,4000);


//callback

// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a,b, sumCalback){
//     sumCalback(a,b);
// }
// // calculator(1,2, sum);
// calculator(1,2, (a , b) => {
//     console.log(a + b);
    
// });

//nesting

// let age=25;
// if(age>=20){

// if(age>=60){
//     console.log("sineor");
// }
// else{
//     console.log("middle");
// }
// }
// else{
//     console.log(child);    
// }

// callback-hell

function getData(dataId){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log("data",dataId);
    resolve("success");
    }, 2000);
  });
}

getData(1).then((res)=>{
  console.log(res);
  getData(2).then((res)=>{
    console.log(res);
    
  });
  
});

// getData(1,() =>{
//     console.log("getting data2...");
//    getData(2,() =>{
//     console.log("getting data3...");
//     getData(3,() =>{
//         console.log("getting data4...");
//       getData(4,() =>{
//       });
//     });
//    }); 
// });



//AnyncFunc

// function asyncFunc1(){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("some data 1");
//       resolve("success");
//       }, 3000);    
//   });
// }

// function asyncFunc2(){
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("some data 2");
//       resolve("success");
//       }, 6000);    
//   });
// }
// console.log("fetching data 1");

// asyncFunc1().then((res)=>{
//   console.log("fetching data 2");
//   asyncFunc2().then((res)=>{});
// });



