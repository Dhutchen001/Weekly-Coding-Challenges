function detectWord(str) {
	let finalWord = [];
	for (let i = 0; i < str.length; i++){
		let currentLetter = str[i];
		if (currentLetter === currentLetter.toLowerCase()){
			finalWord.push(currentLetter);
		}
	}
	return finalWord.join("");
}