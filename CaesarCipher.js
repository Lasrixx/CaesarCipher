function rot13(str) {
    let words = str.split(" ");
    let newWords = [];
    for(let i = 0; i < words.length; i++){
      let newChars = [];
      for(let j = 0; j < words[i].length; j++){
        let charCode = words[i].charCodeAt(j);
        if(charCode < 78 && charCode > 64){
          charCode+=13;
        }
        else if(charCode < 91 && charCode > 64){
          charCode = 65 + (13-(91-charCode));
        }
        newChars.push(String.fromCharCode(charCode));
      }
      let newWord = newChars.join("");
      newWords.push(newWord);
    }
    let newStr = newWords.join(" ");
    console.log(newStr);
    return newStr;
  }
  
  rot13("SERR CVMMN!");