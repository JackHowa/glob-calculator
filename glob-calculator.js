// use es6 backticks 
// parse each line based on newline created 
const input = `glob is I
prok is V
pish is X
tegj is L
glob glob Silver is 34 Credits
glob prok Gold is 57800 Credits
pish pish Iron is 3910 Credits
how much is pish tegj glob glob ?
how many Credits is glob prok Silver ?
how many Credits is glob prok Gold ?
how many Credits is glob prok Iron ?
how much wood could a woodchuck chuck if a woodchuck could chuck wood?`;

function parseInput(inputString) {
	// setup target array 
	// refactor: could map this and then make one-liner
	let inputArray = [];
	// split lines based on 
	var lines = inputString.split('\n');
	for(var i = 0; i < lines.length; i++){
		// push into array
		inputArray.push(lines[i]);
	}
	return inputArray;
}

const simpleRomanConversion = {
	I: 1, 
	V: 5,
	X: 10, 
	L: 50
}

function makeGlobDictionary(inputArray) {
	let simpleGlobConversion = {};

	// for ... of loop Iterating over iterable objects
	for (let inputLine of inputArray) {
		let targetRoman = inputLine.charAt(inputLine.length - 1); // get the last character -> I
		let targetName = inputLine.split(' ')[0]; // split by space; get the first in array -> glob

		// now replace the dictionary 
		if (targetRoman in simpleRomanConversion) {
			let numeralValue = simpleRomanConversion[targetRoman];
			simpleGlobConversion[targetName] = numeralValue;
		}
	}
	return simpleGlobConversion;
}

function findOtherVariables(otherVariablesInputArray) {
	for (otherVariablesInput of otherVariablesInputArray) {
		console.log(otherVariablesInput);
		// how many Credits is glob prok Silver ?
		let splitOtherInput = otherVariablesInput.split(' ');
		let targetValue = splitOtherInput.slice(-2, -1).toString(); // get second to last element in the array -> 34
		let targetVariable = splitOtherInput.slice(2,3).toString(); // get the second element in the arr -> 'Iron'
		
		// this one will just return variables for now 
		let 
	}

	return [7, 9, 10]; // silver, gold, iron 
}

function globController() {
	const inputArray = parseInput(input);

	// non-destructive array return (end not included) 
	// refactoring: could loop through the finding of these 
	const dictionaryInputArray = inputArray.slice(0, 4); // [ 'glob is I', 'prok is V', 'pish is X', 'tegj is L' ]

	const globToNumeralDictionary = makeGlobDictionary(dictionaryInputArray); // { glob: 1, prok: 5, pish: 10, tegj: 50 }

	const otherVariablesInputArray = inputArray.slice(4, 7);
	const [silver, gold, iron] = findOtherVariables(otherVariablesInputArray);

	// could assign those new variables into the dictionary in addition 
	console.log(gold);
};

console.log(globController());