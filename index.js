// code your solution here
function saturdayFun(activity="roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
    
}
console.log(saturdayFun("bathe my dog"));
console.log(saturdayFun("roller-skate"));

const mondayWork = function(activity2="go to the office") {
    return(`This Monday, I will ${activity2}.`);
}
console.log(mondayWork("go to the office"));
console.log(mondayWork("work from home"));


function wrapAdjective(flair="*"){
    return function okCreativity(special="a hard worker"){
        return (`You are ${flair}${special}${flair}!`);
    }
}

console.log(wrapAdjective("!!"));