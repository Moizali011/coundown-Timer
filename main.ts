import { differenceInSeconds, DifferenceInSecondsOptions }from "date-fns";
//step 1//
//function for count down second//
function* countdownTimer(second:number){
    while(second > 0){
        yield second;
        second--;
    }
}
//step 2///

let timerIterator = countdownTimer(30);

///function to create a count down timer//

function displaycountdown(){
    let result = timerIterator.next();


    if(!result.done){
    const now = new Date();
    //calculate minutes in time
    const countdownTimer = new Date(now.getTime()+(result.value* 1000))

    //calculate remainig second in time

    const remainigSecond = differenceInSeconds(countdownTimer,now)

    console.log(`remainig second:${remainigSecond}`)

    setTimeout(displaycountdown,1000)
    }else{
        console.log("countdown complete")
    }
}

displaycountdown();