//Utlilty Logic




//Business Logic
const vowelArray = ["a", "e", "i", "o", "u"];
let text = [];
let inputForm = $("#sentence").val();
const consonantsArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p","q", "r", "s", "t", "v", "w", "x", "y", "z"];



//single vowel + regardless of case
function vowelFinder(text, vowelArray) {
  for (let i = 0; i < vowelArray.length; i++) {
    if (text.toLowerCase() === vowelArray[i].toLowerCase()) {
      return i;
    };
    return -1

//okay
//text = inputForm.push(); ??
text = inputForm.split(" "); 
function wayAdder(text, vowelArray) {
  for (let i = 0; i < vowelArray.length; i++) { 
    if (text.charAt(0) === vowelArray[i]) { //if first letter is a vowel- 
      return (text + "way"); okayway
    }
//words beginning with a consonant
    else if (text.charAt(0) === consonantsArray[i]) { //move
      constText = text.split(" "); //"m" "o" "v" "e"
        if (constText.charAt(0) === consonantsArray[i]) && (constText.charAt(1) === vowelArray[i])  { //move 

          let constPig = constText.slice(0); //"o" "v" "e"
          let newPigLatinWord = constPig.concat(constText(0)); //"o" "v" "e" "m"
          let pigLatinConst = newPigLatinWord.join(); //ovem
            return (pigLatinConst + "ay"); //ovemay
        }
//words beginning with 2 consonants
        }else if (constText.charAt(0) === consonantsArray[i]) && (constText.charAt(1) === consonantsArray[i]) { //create

          let constPig = constText.slice(1); //"c" "r" "e" "a" "t" "e"
          let newPigLatinWord = constPig.concat(constText(1)); //"e" "a" "t" "r" "c" "r"
          let pigLatinConst = newPigLatinWord.join(); // eatecr
            return (pigLatinConst + "ay"); // eatecray
        }
  //words that have qu at the beginning of the word
        }else if (constText.charAt(0) === "q") && (constText.charAt(1) === "u") { // "q" "u" "i" "c" "k"

          let constPig = constText.slice(1); //"i" "c" "k"
          let newPigLatinWord = constPig.concat(constText(1)); //"i" "c" "k" "q" "u"
          let pigLatinConst = newPigLatinWord.join(); //ickqu
            return (pigLatinConst + "ay"); //ickquay
        }
          //words that start with a consonant followed by qu at the beginning of the word
        }else if (constText.charAt(0) === consonantsArray[i]) && (constText.charAt(1) === "q") && (constText.charAt(2) === "u") {// "s" "q" "u" "e" "a" "k"

          let constPig = constText.slice(2); // "e" "a" "k" "s" "q" "u"
          let newPigLatinWord = constPig.concat(constText(2)); // "e" "a" "k" "s" "q" "u"
          let pigLatinConst = newPigLatinWord.join(); //eaksqu
            return (pigLatinConst + "ay"); //eaksquay
          }
        }
      }
    } else {
      return false;
    }
  }
});



//non-alphabetical characters? ior is it taken care of by false? need to further develop//
//inputForm.includes("[^a-zA-Z]", "");
//if (!elephant(text)) {
  
//  return false
 




// UI Logic