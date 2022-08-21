function scuberGreetingForFeet(someValue){
  let result
  if (someValue > 2500) {
    result = 'No can do.';
  }
  else if(someValue > 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
  else {
    result = 'This one is on me!';
  }
  return result
}

function ternaryCheckCity(someCity){
let result
if(someCity === 'NYC') {
  result = 'Ok, sounds good.';
}
else {
  result = 'No go.' 
}
return result
}

function switchOnCharmFromTip(someTip){
let result
if(someTip === 'generous') {
  result = 'Thank you so much.';
}
else if(someTip === 'not as generous') {
  result = 'Thank you.';
}
else {
  result = 'Bye.';
}
return result
}