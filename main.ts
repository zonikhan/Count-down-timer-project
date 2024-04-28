#! /usr/bin/env node
// countdown Timer project
// IN this project, you will build a countdown timer using the data module.

// datamodule install command
//npm insall data-fns

// start coding: step 1
import { differenceInSeconds, DifferenceInSecondsOptions }from "date-fns"; 

//fucction for count down second
function * countdownTimer(second:number){
    // while loop
    while (second > 0) {
     yield second;
       second--;

        }
    }
// step 2 : counter inilization
let timerIterator = countdownTimer(25);

// function to create a count down timer
function displayCountDown(){

    // value below 10
    let result = timerIterator.next();
    
//if else condition applay

if(!result.done) {
    // current data and time calls
    const now = new Date();
 // calculate mintes in time
    const countdownTime = new Date(now.getTime() + (result.value * 1000))
    // calculate remaining second in time
    const remainingSeconds = differenceInSeconds(countdownTime , now)
    console.log(`Remaining Seconds: ${remainingSeconds}`)
    setTimeout(displayCountDown, 1000) // 1second is equal to 1000 ms
}else{
    //disply result count down complete!
    console.log("countdown complete!")
}
}
// invoke
displayCountDown();

 
