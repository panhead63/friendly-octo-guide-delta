$(document).ready(function () {  //start 
  console.log("doc is ready");
  
  $("#btnGetFacts").click(function (){

    //assign some variables

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
  


    });


});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = nameLength(userName);
  coolFacts += " <br>" + nameStart(userName);
  coolFacts += "<br>" + nameEnd(userName);
  coolFacts += "<br>" + (getSpiritAnimal(userName));

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

//fun name facts
function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "The first letter of your name is " + name[0] + "!";
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1

  return "The last letter of your name is " + name[lastIndex] + "!";
}

function getSpiritAnimal(x) {
  //if, else if, & else statements
  //spirit animals 

  if (x.length < 5) {
    return "Your spirit animal is a polar bear!";
  } 
  
  else if (x.length > 5) {
    return "Your spirit animal is a dolphin!";
  }
    
  else {
    return "Your spirit animal is a lion!";
  }
}