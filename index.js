function incrementString(strng) {
  let lastNum = strng.match(/(\d+)(?!.*\d)/gi);

  if (lastNum === null) {
    strng += '1';
  } else {
    let icremNum = +lastNum + 1;

    strng = strng.replace(
      /(\d+)(?!.*\d)/gi,
      icremNum.toString().padStart(lastNum[0].length, '0')
    );
  }

  return strng;
}

console.log(incrementString('foobar00999'));
