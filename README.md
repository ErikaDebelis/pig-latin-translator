Describe: vowelFinder();

Test: "It recognizes a single vowel."
Code: vowelFinder("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: vowelFinder("A");
Expected Output: 1

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelFinder("*&$92%");
Expected Output: 0

Test: "It recognizes words beginning with a vowel"
Code: vowelFinder("okay");
Expected Output: 1

Test: "Function adds "way" to end of word"
Code: vowelFinder("okayway");
Expected Output: 1

Describe: consonateFinder();

Test: "It recognizes words beginning with a consonant"
Code: consonateFinder("cow");
Expected Output: 1

Test: "It recognizes words beginning with 2 consonants"
Code: consonateFinder("create");
Expected Output: 1

Test: "Function moves consonates to end of word"
Code: consonateFinder("owc");
Expected Output: 1

Test: "Function add's 'ay' to end"
Code: consonateFinder("owcay");
Expected Output: 1

Describe: quFinder();

Test: "It recognizes words that have qu at the beginning of the word"
Code: quFinder("queen");
Expected Output: 1

Test "Function moves 'qu' to the end of word"
Code: quFinder("eenqu); 
Expected Output: 1

Test "Function add's 'ay' to the end of the word"
Code: quFinder("eenquay);
Expected Output: 1

Test: "It recognizes words that start with a consonant followed by qu at the beginning of the word"
Code: quFinder("squeak");
Expected Output: 1

Test "Function add's 'ay' to the end of the word"
Code: quFinder("eaksquay);
Expected Output: 1

grotesque
quegrotes
otesquegray via pig latin translator

rotesquegay

squeal
uealsqay
e 