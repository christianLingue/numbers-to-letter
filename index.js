const numbersInFrenchZeroToNine = {
  0: "zéro",
  1: "un",
  2: "deux",
  3: "trois",
  4: "quatre",
  5: "cinq",
  6: "six",
  7: "sept",
  8: "huit",
  9: "neuf",
};
const numbersInFrenchTenToSixteen = {
  10: "dix",
  11: "onze",
  12: "douze",
  13: "treize",
  14: "quatorze",
  15: "quinze",
  16: "seize",
};
const from1to16 = {
  0: "zéro",
  1: "un",
  2: "deux",
  3: "trois",
  4: "quatre",
  5: "cinq",
  6: "six",
  7: "sept",
  8: "huit",
  9: "neuf",
  10: "dix",
  11: "onze",
  12: "douze",
  13: "treize",
  14: "quatorze",
  15: "quinze",
  16: "seize",
};
const numbersInFrenchTenToSixteenSimplify = {
  1: "onze",
  2: "douze",
  3: "treize",
  4: "quatorze",
  5: "quinze",
  6: "seize",
};

const magnitude = {
  unity: 'unity',
  thousand: 'mille',
  million: 'million',
  thousand: 'milliards',
}

const test = {
  0: 'unity',
  1: 'mille',
  2: 'million',
  3: 'milliards',
}
// Affichage de l'objet dans la console

const multiplesOfTenInFrenchFromTwentyToSixty = {
  20: "vingt",
  30: "trente",
  40: "quarante",
  50: "cinquante",
  60: "soixante",
  80: "quatre-vingts",
};
const multiplesOfTenInFrenchFromSeventyToNinety = {
  70: "soixante-dix",
  90: "quatre-vingt-dix",
};

const numbersInLetterFormat = {
  1: { unity: "un", tenth: "dix" },
  2: { unity: "deux", tenth: "vingt" },
  3: { unity: "trois", tenth: "trente" },
  4: { unity: "quatre", tenth: "quarante" },
  5: { unity: "cinq", tenth: "cinquante" },
  6: { unity: "six", tenth: "soixante" },
  7: { unity: "sept", tenth: "soixante-dix" },
  8: { unity: "huit", tenth: "quatre-vingts" },
  9: { unity: "neuf", tenth: "quatre-vingt-dix" },
};

let hundred = "cent ";

/* let thousandErro = () => {
  let number = '100O034'
  
  for
  
  
} 

console.log(thousandErro()); */


let isInTheArray = (arr, elt) => {
  newArr = arr.filter((current) => elt == current);
  

  if (newArr.length != 0) return true;
  return false;
};

let reverse = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
};

let getClass = (arr) => {
  let rank = arr.length;
  switch (arr.length) {
    case (rank = 0):
      // Il se trouve dans les centaines
      break;

    default:
      break;
  }
};

let separate = (number) => {
  let three;
  let arrayOfNumber = number.toString().split("");
  let arr = [];
  result = [];
  for (let i = arrayOfNumber.length - 1; i >= 0; i--) {
    three = i;
    for (let j = 0; j < 3; j++) {
      if (three >= 0) {
        arr.unshift(arrayOfNumber[three]);
        three--;
        arrayOfNumber.pop();
      }
    }
    i = arrayOfNumber.length;
    result.push(arr);
    arr = [];
  }
  return reverse(result);
};

/* let associateToClass = (arr) => {
  const gradeur = {
    unity: '1',
    milliers: "2",
    millions: "3",
    milliard: '4'
  }
  if (arr.length == 4) {

  }
  arr.forEach((value, index) => {
    console.log([{}]);
    
  })
} */

let popFirstZero = (arr) => {
  if (arr[0] == 0 && arr[1] != 0) {
    let newArr = [];
    return [arr[1], arr[2]];
  }
  if (arr[0] == 0 && arr[1] == 0) {
    return [arr[2]];
  }
  return arr;
};

let formatToRank2 = (arr) => {

  let rank = popFirstZero(arr).length;
  let firstDigit = arr[0];
  let secondDigit = arr[1];
  let thirdDigit = arr[2];
  //recuperer les deux dernier chiffres de la donnée
  let lastTwoDigits = secondDigit + thirdDigit;
  let firstTwoDigits = firstDigit + secondDigit;
  let read = " ";
  let centaine, tenth, unite;

  if (lastTwoDigits == "00" || firstTwoDigits == "00") {
  } else {
    //verifier si ils appartiennent au tableau des lettres de 10 à 16
    if (numbersInFrenchTenToSixteen[lastTwoDigits] != undefined) {
      // rendre et terminer
      return (read += numbersInFrenchTenToSixteen[lastTwoDigits]);
    }
    // Sil napartienne pas, faut faire la con
    else {
      // VS'il le chiffre des dizaine commence par zero
      if (secondDigit == 0) {
        read += " ";
      } else {
        //Gérere les exceptions comme 71 94
        if (["7", "9"].includes(secondDigit)) {
          //exception de 71 à 76
          let dependOnSevenOrNine;

          /* if (['7','9'].indexOf(secondDigit) && ['1','2','3','4','5','6'].indexOf(thirdDigit)) {
            console.log('into');
            
            dependOnSevenOrNine = arr['1'] == '7' ? 70 : 90;
            
            tenth = multiplesOfTenInFrenchFromSeventyToNinety[dependOnSevenOrNine] + ' ' + numbersInFrenchZeroToNine[thirdDigit];
            read += tenth;

           return read
          } */
          //Exceotion de 70 à 76
          if (
            secondDigit == "7" &&
            isInTheArray(["0", "1", "2", "3", "4", "5", "6"], thirdDigit)
          ) {
            let value;
            if (thirdDigit == "0")
              return multiplesOfTenInFrenchFromSeventyToNinety["70"];
            tenth =
              multiplesOfTenInFrenchFromTwentyToSixty["60"] +
              " " +
              numbersInFrenchTenToSixteenSimplify[thirdDigit];
            read += tenth;
            return read;
          }
          //execption de 77 à 79
          else if (
            secondDigit == "7" &&
            isInTheArray(["7", "8", "9"], thirdDigit)
          ) {
            tenth =
              multiplesOfTenInFrenchFromSeventyToNinety["70"] +
              " " +
              numbersInFrenchZeroToNine[thirdDigit];
            read += tenth;
            return read;
          }
          //90 - 96
          else if (
            secondDigit == "9" &&
            isInTheArray(["0", "1", "2", "3", "4", "5", "6"], thirdDigit)
          ) {
            if (thirdDigit == "0")
              return multiplesOfTenInFrenchFromSeventyToNinety["90"];
            tenth =
              multiplesOfTenInFrenchFromTwentyToSixty["80"] +
              " " +
              numbersInFrenchTenToSixteenSimplify[thirdDigit];
            read += tenth;
            return read;
          } else if (
            secondDigit == "9" &&
            isInTheArray(["7", "8", "9"], thirdDigit)
          ) {
            tenth =
              multiplesOfTenInFrenchFromSeventyToNinety["90"] +
              " " +
              numbersInFrenchZeroToNine[thirdDigit];
            read += tenth;
            return read;
          }
          /* else if () {

          } */
          //exception de 77 à 79 ou 97 à 99
          /*  else if (( secondDigit == '7' || secondDigit  == '9' ) && !['1','2','3','4','5','6', '8'].indexOf(thirdDigit)) {                
            dependOnSevenOrNine = arr['1'] == '7' ? 70 : 90;
            console.log('ooojook ah bon', dependOnSevenOrNine);
            return read + multiplesOfTenInFrenchFromSeventyToNinety[dependOnSevenOrNine] + numbersInFrenchTenToSixteenSimplify[thirdDigit]
          } */
        } else {
          //Si le chiffre des dizaine n'est pas zero, récupérer la lettre associé au chiffre
          tenth = numbersInLetterFormat[secondDigit].tenth;
          return (read += tenth + " ");
        }
      }
    }
  }
};

let initialize = (arr) => {
  
  // Nous sommes dans le rang 2
    if ( arr[2] == undefined && arr.length == 2) return [0, arr[0], arr[1]] 
    //Si nous sommens dans le rang 1
    if ( arr[1] == undefined ) return [0, 0, arr[0]]

    return arr;
}

let decomposate = (arr) => {
  
  arr = initialize(arr);

  
  let rank = popFirstZero(arr).length;
  
  let lastTwoDigits,firstTwoDigits,firstDigit,secondDigit,thirdDigit
  //Si on a trois éléments dans le tableau
  firstDigit = arr[0];
  secondDigit = arr[1];
  thirdDigit = arr[2];

  lastTwoDigits = secondDigit + thirdDigit;
  firstTwoDigits = firstDigit + secondDigit;
  /* if ( arr[2] != undefined ) {

    //recuperer les deux dernier chiffres de la donnée
  } */
  let read = "";
  let centaine, tenth, unite;

 
  //si le nombre est 0000
  if (lastTwoDigits == "00" && firstTwoDigits == "00") return "zero";

  for (let i = 0; i < arr.length; i++) {
    //Si nous avons trois chiffres
    if (rank == 3) {
      //Si le premier chiffre est 1 alors number est e rang 3 123
      if (firstDigit == 1) {
        if (lastTwoDigits == "00") {
          return hundred;
        } else if (secondDigit == 0) {
          read += hundred;
        } else if (secondDigit != 0 && thirdDigit != 0) {
          read += hundred;
        } else {
          return hundred + formatToRank2(arr);
        }
      } else {
        if (lastTwoDigits == "00") {
          return numbersInFrenchZeroToNine[firstDigit] + " " + hundred;
        } else if (secondDigit == 0) {
          centaine = numbersInLetterFormat[firstDigit].unity + " " + hundred;
          read += centaine;
        } else {
          centaine = numbersInLetterFormat[firstDigit].unity + " " + hundred;
          read += centaine;
        }
      }
    } else if (rank == 2) {
      if (lastTwoDigits == "00" || firstTwoDigits == "00") {
      } else {
        //verifier si ils appartiennent au tableau des lettres de 10 à 16
        if (numbersInFrenchTenToSixteen[lastTwoDigits] != undefined) {
          // rendre et terminer
          return (read += numbersInFrenchTenToSixteen[lastTwoDigits]);
        }
        // Sil napartienne pas, faut faire la con
        else {
          // VS'il le chiffre des dizaine commence par zero
          if (secondDigit == 0) {
            read += "";
          } else {
            //Gérere les exceptions comme 71 94
            if (["7", "9"].includes(secondDigit)) {
              //exception de 71 à 76
              let dependOnSevenOrNine;
              if (
                secondDigit == "7" &&
                isInTheArray(["0", "1", "2", "3", "4", "5", "6"], thirdDigit)
              ) {
                let value;
                if (thirdDigit == "0")
                  return multiplesOfTenInFrenchFromSeventyToNinety["70"];
                tenth =
                  multiplesOfTenInFrenchFromTwentyToSixty["60"] +
                  " " +
                  numbersInFrenchTenToSixteenSimplify[thirdDigit];
                read += tenth;
                return read;
              }
              //execption de 77 à 79
              else if (
                secondDigit == "7" &&
                isInTheArray(["7", "8", "9"], thirdDigit)
              ) {
                tenth =
                  multiplesOfTenInFrenchFromSeventyToNinety["70"] +
                  " " +
                  numbersInFrenchZeroToNine[thirdDigit];
                read += tenth;
                return read;
              }
              //90 - 96
              else if (
                secondDigit == "9" &&
                isInTheArray(["0", "1", "2", "3", "4", "5", "6"], thirdDigit)
              ) {
                if (thirdDigit == "0")
                  return multiplesOfTenInFrenchFromSeventyToNinety["90"];
                tenth =
                  multiplesOfTenInFrenchFromTwentyToSixty["80"] +
                  " " +
                  numbersInFrenchTenToSixteenSimplify[thirdDigit];
                read += tenth;
                return read;
              } else if (
                secondDigit == "9" &&
                isInTheArray(["7", "8", "9"], thirdDigit)
              ) {
                tenth =
                  multiplesOfTenInFrenchFromSeventyToNinety["90"] +
                  " " +
                  numbersInFrenchZeroToNine[thirdDigit];
                read += tenth;
                return read;
              }
            } else {
              //Si le chiffre des dizaine n'est pas zero, récupérer la lettre associé au chiffre
              tenth = numbersInLetterFormat[arr[1]].tenth;
              read += tenth + " ";
            }
          }
        }
      }
    } else if (rank == 1) {
      if (thirdDigit == 0) {
        read += "";
      } else {
        unite = numbersInFrenchZeroToNine[thirdDigit];
        read += unite;
      }
    }

    rank--;
  }

  return read;
};

let separated = separate(220310);

let fromNumber = (number) => {
  
  let separated = separate(number);
  
  
  let stringArray = [];
  separated.map((value, index) => {
    let ok = value.length - index

    
    stringArray.push(decomposate(value))
  });

  

  let result = ""; let numberClass = stringArray.length;

  if (numberClass == 1) result = stringArray[0];
  
  if ( numberClass == 2) {
    if ( stringArray[0] == 'un') return 'mille ' + stringArray[1]
    result = stringArray[0] + ' mille ' + stringArray[1]
  }

  if (numberClass == 3) {
    result = stringArray[0] + ' millions ' + stringArray[1] + ' mille ' + stringArray[2]
  }

  if (numberClass == 4) {
    result = stringArray[0] + ' milliards ' + stringArray[1] + ' millions ' + stringArray[2] + 'mille' + stringArray[3]
  }

  if (numberClass > 4 ) {
    console.log("OK");
    
  }

  return result;
  
  return stringArray;
};



const testNumber = 134567789

console.log(fromNumber('100O034'));

/* console.log(decomposate(['1','<"','0'])); */
