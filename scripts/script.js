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
  coolFacts += "<br>" + (getBibleVerse(userName));
  coolFacts += "<br>" + (getSpiritAnimal(userName));

  console.log("initialized the'm coolFacts variable: " + coolFacts); 

  return coolFacts;
}

//fun name facts
function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function getBibleVerse(y) {
  //if, else if, & else statements
  //quotes 

  if (y.length < 6) {
    return "Don't be anxious about anything. Philipians 4:6-7";
  } 
  
  else if (y.length > 6) {
    return "Be strong and courageous. Deuteronomy 31:6";
  }
    
  else {
    return "With God all things are possible. Matthew 19:26";
  }
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
