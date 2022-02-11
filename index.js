var readlineSync = require('readline-sync');

var score=0;

console.log('G.K quiz -\n');
console.log('Rule: 1 point for right answer else 0 point for wrong answer.');

function quiz (ques, ans){
  var userAns = readlineSync.question(ques+'\nAnswer: ');
  if (ans==userAns.toLowerCase()){
    score=score+1;
    console.log('\nRight answer!');
    console.log('Current score= '+score);
  }
  else{
    console.log('\nWrong answer!');
    console.log('Current score= '+score);
  }
}

var questions=[];

questions[0]={
  ques:
  `Grand Central Terminal, Park Avenue, New York is the world's
A. 	Largest airport
B. 	Largest railway station 
C. 	Largest bus terminal
D. 	Longest railway station`
  ,ans: 'b'
}

questions[1]={
  ques:
  `Entomology is the science that studies
A. 	Behavior of human beings
B. 	Insects 
C. 	The origin and history of technical and scientific terms
D. 	The formation of rocks`
  ,ans: 'b'
}

questions[2]={
  ques:
  `Epsom (England) is the place associated with
A. 	Horse racing 
B. 	Polo
C. 	Shooting
D. 	Snooker`
  ,ans: 'a'
}

questions[3]={
  ques:
  `First China War was fought between
A. 	China and Britain 
B. 	China and France
C. 	China and India
D. 	China and Germany`
  ,ans: 'a'
}

questions[4]={
  ques:
  `Fire temple is the place of worship of which of the following religion?
A. 	Taoism
B. 	Judaism
C. 	Zoroastrianism 
D. 	Shintoism`
  ,ans: 'c'
}

questions[5]={
  ques:
  `Frederick Sanger is a twice recipient of the Nobel Prize for
A. 	Chemistry in 1958 and 1980 
B. 	Physics in 1956 and 1972
C. 	Chemistry in 1954 and Peace in 1962
D. 	Physics in 1903 and Chemistry in 1911`
  ,ans: 'a'
}

questions[6]={
  ques:
  `Durand Cup is associated with the game of
A. 	Cricket
B. 	Football 
C. 	Hockey
D. 	Volleyball`
  ,ans: 'b'
}

questions[7]={
  ques:
  `Fathometer is used to measure
A. 	Earthquakes
B. 	Rainfall
C. 	Ocean depth 
D. 	Sound intensity`
  ,ans: 'c'
}

questions[8]={
  ques:
  `Headquarters of UN are situated at
A. 	New York
B. 	Vienna
C. 	Geneva
D. 	Paris`
  ,ans: 'a'
}

questions[9]={
  ques:
  `Himalayan Mountaineering Institute is at
A. 	Darjeeling 
B. 	Dehradun
C. 	Marmago
D. 	Dispur`
  ,ans: 'a'
}

for (var i=0;i<questions.length;i++){
  console.log('\nQuestion '+(i+1)+':');
  quiz(questions[i].ques,questions[i].ans);
}

console.log('\nTotal score= '+score)