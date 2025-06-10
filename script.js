let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curmode = "light";

modebtn.addEventListener("click", () => {
    if (curmode === "light") {
        curmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        curmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curmode);
});
console.log("hy");
setTimeout(() =>{
    console.log("Hello!");
} , 2000);
function hello(){
    console.log("Hello isha!");
}
setTimeout(hello , 2000);
console.log("Delay ");

function sum (a,b){
console.log(a+b);
}
function calcul(a,b,sumCallBack){

    sumCallBack(a,b);
}
calcul(3,4,sum);
console.log("Hello");
const URL = "https://cat-fact.herokuapp.com/facts";
const getFacts = async () => {
    console.log("Getting data....");
    let response = await fetch(URL);
    console.log(response.status);
};

// odd even number
// for(let i = 0; i<=10;i++){
//     if(i%2!=0){
//     console.log("No " + i + ".");
//     }
// }

//    table

// let n = prompt("Enter number for table:");
// n = parseInt(n);
// for (let i = 0; i <= 10; i++) {
//   console.log(`${n} * ${i} = ${n * i}`);
// }
