/* Copyright (c) 2023 Montri Kiatphaophan
 * dice.js | v1.0.0 | All rights reserved.
*/

const dice = new Map ([
[1,'\u{02680}'],
[2,'\u{02681}'],
[3,'\u{02682}'],
[4,'\u{02683}'],
[5,'\u{02684}'],
[6,'\u{02685}'],
]);

function roll(){
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

document.getElementById('d1').innerHTML=dice.get(dice1);
document.getElementById('d1').style.fontSize='120px';
if(dice1==1){document.getElementById('d1').style.color='red';}
else{document.getElementById('d1').style.color='black';}

document.getElementById('d2').innerHTML=dice.get(dice2);
document.getElementById('d2').style.fontSize='120px';
if(dice2==1){document.getElementById('d2').style.color='red';}
else{document.getElementById('d2').style.color='black';}


let a0 =document.getElementById('d3').innerHTML;
let a1 = Number(a0);

let b0 =document.getElementById('d4').innerHTML;
let b1 = Number(b0);

let diceA = Number(dice1);
let diceB = Number(dice2);

let a = a1 + diceA;
let b = b1 + diceB;

document.getElementById('d3').innerHTML=a;
document.getElementById('d4').innerHTML=b;


var data = [
  {
    x: ['PON', 'DAD'],
    y: [a, b],
    type: 'bar'
  }
];

Plotly.newPlot('d5', data);

}