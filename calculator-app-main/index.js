function handleThemeChooserClick(event) {
  if (event.target.tagName !== 'BUTTON') return;
  toggleTheme(event.target.value);
  for (let elem of document.getElementsByClassName('theme-btn')) {
    if (elem === event.target) elem.classList.add('choosen');
    else elem.classList.remove('choosen');
  }
}

function toggleTheme(theme) {
  let body = document.getElementsByTagName('body')[0];
  body.classList.forEach(item => {
    if (item.startsWith('theme-')) {
      body.classList.remove(item);
    }
  })
  body.classList.add(theme);
}

var numberString = '';
var savedString;
var opKey;
var resultOutput = document.getElementById('result-output');

function handlePadClick(event) {
  var target = event.target;
  var targetClass = target.classList;

  if (targetClass.contains('num-key')) {
    numberString += target.value;
    resultOutput.innerText = numberString;
    return;
  }

  if (targetClass.contains('equal-key')) {
    numberString = parseEquation(parseFloat(numberString), opKey, parseFloat(savedString));
    resultOutput.innerText = numberString;
    return;
  }

  if (targetClass.contains('op-key')) {
    if (savedString) {
      numberString = parseEquation(parseFloat(numberString), opKey, parseFloat(savedString));
      resultOutput.innerText = numberString;
    }

    savedString = numberString;
    numberString = '';
    opKey = target.value;
    /* resultOutput.innerText = opKey; */
    return;
  }

  if (targetClass.contains('special-key')) {
    if (target.value === 'DEL') {
      numberString = numberString.substring(0, numberString.length - 1);
      resultOutput.innerText = numberString;
      if (numberString === '') {
        numberString === '0';
      }
      return;
    }

    if (target.value === 'RESET') {
      numberString = result = opKey = '';
      resultOutput.innerText = '0';
      return;
    }
  }

}

function parseEquation(num1, opCode, num2) {
  switch (opCode) {
    case '+':
      return num1 + num2;
    case '-':
      return num2 - num1;
    case 'x':
      return num1 * num2;
    case '/':
      return num2 / num1;
  }
}