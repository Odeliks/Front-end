// Array
const arr = [10,5,13,18,51];

function doubled(array) {
  return array.map((el) => el * 2);
}

function onlyEvens(array) {
  return array.filter(el => el % 2 === 0);
}

function containsLowerThan10(array) {
  return array.some(el => el < 10);
}

function kratno3(array) {
  return array.filter(el => {
    el % 3 === 0;
  });
}

function sumArray(array) {
  return array.reduce((a, b) => {
  return  a + b
  },0);
}

function last2(array) {
  return array.slice(-2);
}

// console.log(doubled(arr));
// console.log(onlyEvens(arr));
// console.log(containsLowerThan10(arr));
// console.log(kratno3(arr));
// console.log(sumArray(arr));
// console.log(last2(arr));

const currArray = [];
// Date

function days(month,year) {
  return new Date(year, month, 0).getDate();
};

currArray.push(new Date());
currArray.push(new Date('December 8, 2018 21:00:00'))
// console.log(currArray.map(date => [days(date.getFullYear(),date.getMonth()), date.getDay()]));



//BONUS
const bonusArray = [50,32,65,1,24];

function contains50(array) {
  return array.includes(50);
}

function sumIs5(array) {
  return array.reduce((a,b) => a + b, 0) === 50;
}

function needsTo50(array) {
  return 50 - array.reduce((a,b) => a + b, 0);
}

const ivan = "ivangotrion";

function mostCommon(str) {
  const counts = {}
  str.split('').forEach(el => {
    if(counts[el]){
      counts[el]++;
    } else {
      counts[el] = 1;
    }
  });
  
  mostCommonLetterCount = Math.max(...Object.values(counts));
    
  return Object.keys(counts).filter(letter => counts[letter] === mostCommonLetterCount);
}

mostCommon(ivan);

function plocha(arr) {
  const counts = {}
  arr.forEach(el => {
    if(counts[el]){
      counts[el]++;
    } else {
      counts[el] = 1;
    }
  });
  mostCommonNumberCount = Math.max(...Object.values(counts));
    console.log(mostCommonLetterCount, counts)
  const ivan =  Object.keys(counts).filter(letter => counts[letter] === mostCommonNumberCount);
  const result  = '' + ivan[ivan.length - 1];
  return result.repeat(mostCommonLetterCount);
}
const jok = [1,1,1,1,2,2,3,3,3,3,5,5,5,5]

console.log(plocha(jok))

function toChristmas() {
  const current = new Date();
  const christmas = new Date(2021,11,25);
  let timeTo = Math.round((christmas.getTime() - current.getTime())/ (1000*60*60*24));
  return timeTo; 
}

let string = "ivan e nai-dobria";

function addN(string) {
  let arrayS = string.split(' ');
  let result = [];
  for(let i = 0; i < arrayS.length; i++) {
    let el = arrayS[i].split('');
    if(arrayS[i][0] === 'n' || arrayS[i][0] === 'N'){
      result.push(el.join(''));
      continue;
    }
    el.unshift('n')//.join('');
    el = el.join('');
    result.push(el);
  }
  return result.join(' ');
}

// let i = 'ivan';
// console.log(contains50(bonusArray))
// console.log(sumIs5(bonusArray))
// console.log(needsTo50(bonusArray))

// console.log(toChristmas());

// console.log(addN(string));

const asd = ['ivan', 'e', 'pi4'];
console.log(asd.reduce((a,b) => a + b, ''));