function LongestWord(sen) { 

    let splitSen = sen.replace(/[^a-zA-Z]/, " ").split(" ");
    let word = " "
  
    for (let i = 0; i < splitSen.length; i++){
      if (splitSen[i].length > word.length){
        word = splitSen[i];
      }
    }
   
    return word; 
  
  }
     
  console.log(LongestWord(readline()));