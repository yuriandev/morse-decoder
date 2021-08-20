const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // split the expression to 10 length letter values in an array
  const arrayByTenLetters = expr.match(/.{1,10}/g);

  // transform the numbers to the morse symbols
  const arrayMorseSymbols = arrayByTenLetters.map((el) =>
    el
      .replace(/^0+/, "")
      .replace(/11/g, "-")
      .replace(/10/g, ".")
      .replace(/^\*+/, " ")
  );

  // Decode the morse symbols to the human letters in an array
  const arrayLettersFromMorse = arrayMorseSymbols.map((el) => {
    if (el === " ") return " ";
    else return MORSE_TABLE[el];
  });

  // transform an array to the sentence
  return arrayLettersFromMorse.join("");
}

module.exports = {
  decode,
};
