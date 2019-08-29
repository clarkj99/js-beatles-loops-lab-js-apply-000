// add solution here
function theBeatlesPlay(musicians, instruments) {
  var description = []; 
  
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    description.push(string);
  }
  
  return description;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = []
  while(i < facts.length) {
    newFacts[i].concat(facts[i],"!!!");
    i++;
  }
  return facts;
}

function iLoveTheBeatles() {
  
}