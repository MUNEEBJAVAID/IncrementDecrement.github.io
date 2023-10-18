const increment = document.getElementById("increment");
const decrement = document.getElementById("Decrement");
const count = document.getElementById("count");

const incrementCount = ()=>{
    // convert string into integer
     let value =  parseInt(count.innerText);
    //  increment the value
     value = value + 1;
    // update count 
     count.innerText = value;
}
increment.addEventListener('click' , incrementCount);


const decrementCount = ()=>{
     // convert string into integer
    let value =  parseInt(count.innerText);
     //  decrement the value
    value = value - 1;
     // update count 
    count.innerText = value;
 }
 decrement.addEventListener('click' , decrementCount);