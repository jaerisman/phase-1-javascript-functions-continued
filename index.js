function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(work = "go to the office") {
    return (`This Monday, I will ${work}.`);
}
mondayWork();

function wrapAdjective(visualFlair="*") {
    return function(adjective = "special"){
        return(`You are ${visualFlair}${adjective}${visualFlair}!`);
    }
}
wrapAdjective();