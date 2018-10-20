var myObj = {};
var myArray = [1, 3];

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
	return obj[key];
}

addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]

/* ----------------------------------------------------- */

function getNthElement(array, n) {
	if (array.length === 0){
		return undefined;
	} else{
		return array[n];
	}
}

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

/* ----------------------------------------------------- */

function getFirstElement(array) {
    if(array.length === 0){
        return undefined;
    } else{
        return array[0];
    }
  }
  
  var output = getFirstElement([1, 2, 3, 4, 5]);
  console.log(output); // --> 1

/* ----------------------------------------------------- */

function getLastElement(array) {
	if(array.length === 0){
		return undefined;
	}
	return array.slice(-1).pop();
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

/* ----------------------------------------------------- */

function addToFront(arr, element) {
  arr.unshift(element)
  return arr;
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

  /* ----------------------------------------------------- */

function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]

  /* ----------------------------------------------------- */

function computeAreaOfARectangle(length, width) {
  return length * width;
}

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

  /* ----------------------------------------------------- */

function computePerimeterOfARectangle(length, width) {
  return (length + width) * 2;
}

var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14

 /* ----------------------------------------------------- */

function computePerimeterOfATriangle(side1, side2, side3) {
  return (side1 + side2 + side3);
}

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20

 /* ----------------------------------------------------- */

 function computePerimeterOfACircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  var output = computePerimeterOfACircle(4);
  console.log(output); // --> 25.132741228718345

   /* ----------------------------------------------------- */

function computeTripledAreaOfARectangle(length, width) {
    return (length * width) * 3;
}

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24

   /* ----------------------------------------------------- */
   function computeAreaOfACircle(radius) {
	return (Math.PI * Math.pow(radius, 2));
}

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669

   /* ----------------------------------------------------- */

function computePower(num, exponent) {
    return Math.pow(num, exponent);
  }
  
  var output = computePower(2, 3);
  console.log(output); // --> 8

   /* ----------------------------------------------------- */

  function computeSquareRoot(num) {
    return Math.sqrt(num);
  }
  
  var output = computeSquareRoot(9);
  console.log(output); // --> 3

   /* ----------------------------------------------------- */

  function doubleSquareRootOf(num) {
    return (Math.sqrt(num)) * 2;
  }
  
  var output = doubleSquareRootOf(121);
  console.log(output); // --> 22

 /* ----------------------------------------------------- */

  function getLengthOfThreeWords(word1, word2, word3) {
    return (word1.length + word2.length + word3.length)
  }
  
  var output = getLengthOfThreeWords('some', 'other', 'words');
  console.log(output); // --> 14

  /* ----------------------------------------------------- */

  function findShortestOfThreeWords(word1, word2, word3) {
    let wordsArr = [word1, word2, word3];
    let shortestWord = word1;
    
    for (var i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i].length < shortestWord.length) {
        shortestWord = wordsArr[i];
      }
    }
    return shortestWord;
  }
  var output = findShortestOfThreeWords('a', 'two', 'three');
  console.log('output: ', output);

  /* ----------------------------------------------------- */

  function joinArrays(arr1, arr2) {
	return arr1.concat(arr2);
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

  /* ----------------------------------------------------- */

function getElementsAfter(arr, n) {
  return arr.slice(n + 1);
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']

  /* ----------------------------------------------------- */

  function getElementsUpTo(array, n) {
    array.splice(n)
    return array;
  }
  
  var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
  console.log(output); // --> ['a', 'b', 'c']

 /* ----------------------------------------------------- */

 function getAllElementsButFirst(array) {
	array.shift();
	return array;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

 /* ----------------------------------------------------- */

function getAllElementsButLast(array) {
  array.pop();
  return array;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

 /* ----------------------------------------------------- */



