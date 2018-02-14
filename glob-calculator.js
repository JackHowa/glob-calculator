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

let simpleGlobConversion = {};

function makeGlobDictionary(inputArray) {

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

		// how many Credits is glob prok Silver ?
		let splitOtherInput = otherVariablesInput.split(' ');
		let targetValue = splitOtherInput.slice(-2, -1).toString(); // get second to last element in the array -> 34
		let targetVariable = splitOtherInput.slice(2,3).toString(); // get the second element in the arr -> 'Iron'

		let knownInputs = splitOtherInput.slice(0,2); // [ 'glob', 'glob' ]

		let totalExcludingUnknown = findTotalValue(knownInputs); // based on known values 

		let otherVariableValue = targetValue - totalExcludingUnknown; // to find difference between known and unknown 

		// can set this in the global glob dictionary 
		simpleGlobConversion[targetVariable] = otherVariableValue;
	}

	return simpleGlobConversion; // { glob: 1, prok: 5, pish: 10, tegj: 50, Silver: 32, Gold: 57794, Iron: 3890 }
}

function findTotalValue(nonArabicNumberInputArray) {
	// set output for the whole number
	let output = 0;

	// loop through while condition is true
	// the input length can't be zero
	// wouldn't even want to run once using do while if so
	while (nonArabicNumberInputArray.length > 0) {
		// use add value for each letter each time num
		// runs through the while loop

		output += addValue(nonArabicNumberInputArray[0]);
		console.log(output);

		// removes the first input in the array
		nonArabicNumberInputArray = nonArabicNumberInputArray.slice(1);
	} 

	// return output for each array of known values
	return output;
}

// one character at a time 
function addValue(character) {
	if (simpleGlobConversion.hasOwnProperty(character)) {
		return simpleGlobConversion[character];
	} else {
		// don't want to return null or nothing 
		return 0;
	}
}


function globController() {
	const inputArray = parseInput(input);

	// non-destructive array return (end not included) 
	// refactoring: could loop through the finding of these 
	const dictionaryInputArray = inputArray.slice(0, 4); // [ 'glob is I', 'prok is V', 'pish is X', 'tegj is L' ]

	const globToNumeralDictionary = makeGlobDictionary(dictionaryInputArray); // { glob: 1, prok: 5, pish: 10, tegj: 50 }

	const otherVariablesInputArray = inputArray.slice(4, 7);
	findOtherVariables(otherVariablesInputArray); // update the glob dictionary with new names 

	// how much is pish tegj glob glob ?
	const questionValues = inputArray[7].split(' ');
	let totalValueOfQuestion = findTotalValue(questionValues);
	console.log(totalValueOfQuestion);
};

console.log(globController());