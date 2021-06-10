//Utlilty Logic
const vowelArray = ["a", "e", "i", "o", "u"];
let text = "a";
let inputForm = $("#sentence").val();
const consonantsArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p","q", "r", "s", "t", "v", "w", "x", "y", "z"];




function vowelFinder(text, vowelArray) {
  for (let i = 0; i < vowelArray.length; i++) {
    if (text.toLowerCase() === vowelArray[i].toLowerCase()) {
      return i;
    };
    return -1
    if (!elephant(text)) {
      
      return false
    }
  }
  
} 



let text = [];
// inputForm.includes("[^a-zA-Z]", "");
text = inputForm.split(" ");
function wayAdder(text, vowelArray) {
  for (let i = 0; i < vowelArray.length; i++) {
    if (text.charAt(0) === vowelArray[i]) {
      return (text + "way");
    } else {
      return false;
    }
  }
}
//move
else if (text.charAt(0) === consonantsArray[i]) {
  constText = text.split(" "); //"m" "o" "v" "e"
  if (constText.charAt(0) === consonantsArray[i]) && (constText.charAt(1) === vowelArray[i]) //move 

  let constPig = constText.slice(0) //"o" "v" "e"
  let newPigLatinWord = constPig.concat(constText(0)) //"o" "v" "e" "m"
  let pigLatinConst = newPigLatinWord.join //ovem
    return (pigLatinConst + "ay") //ovemay
}
  else if (constText.charAt(0) === consonantsArray[i]) && (constText.charAt(1) === consonantsArray[i]) //create

  let constPig = constText.slice(1) //"c" "r" "e" "a" "t" "e"
  let newPigLatinWord = constPig.concat(constText(1)) //"e" "a" "t" "e" "c" "r"
  let pigLatinConst = newPigLatinWord.join // eatecr
    return (pigLatinConst + "ay") // eatecray
}
  else if (constText.charAt(0) === "q") && (constText.charAt(1) === "u") // "q" "u" "i" "c" "k"

  let constPig = constText.slice(1) //"i" "c" "k"
  let newPigLatinWord = constPig.concat(constText(1)) //"i" "c" "k" "q" "u"
  let pigLatinConst = newPigLatinWord.join //ickqu
    return (pigLatinConst + "ay") //ickquay
}
  if (constText.charAt(0) === consonantsArray[i]) && (constText.charAt(1) === "q") && (constText.charAt(2) === "u") // "s" "q" "u" "e" "a" "k"

  let constPig = constText.slice(2) // "e" "a" "k" "s" "q" "u"
  let newPigLatinWord = constPig.concat(constText(2)) // "e" "a" "k" "s" "q" "u"
  let pigLatinConst = newPigLatinWord.join //eaksqu
    return (pigLatinConst + "ay") //eaksquay

else if ()


//Doesn't make sense?below//
//let inputForm = vowelArray.split(" ");



//Business Logic










// UI Logic