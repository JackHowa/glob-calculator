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
	console.log(inputArray);
	// for ... of loop Iterating over iterable objects
	for (let inputLine of inputArray) {
		let targetRoman = inputLine.charAt(inputLine.length - 1);
		
	}
}

function globController() {
	const inputArray = parseInput(input);

	// non-destructive array return (end not included) 
	const dictionaryInputArray = inputArray.slice(0, 4); // [ 'glob is I', 'prok is V', 'pish is X', 'tegj is L' ]

	const globToNumeralDictionary = makeGlobDictionary(dictionaryInputArray);

	return globToNumeralDictionary;
};

console.log(globController());