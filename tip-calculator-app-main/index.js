let selectedInput;
let options = document.getElementById('tip-options');


/* document.getElementById('tip-options').onclick = function(event) { */
function selectTipOption(event) {
  let target = event.target; // where was the click?

  if (target.tagName !== 'INPUT') return; // not on INPUt? Then we're not interested
  highlight(target); // highlight it
};

function highlight(target) {
  if (selectedInput) { // remove the existing highlight if any
    selectedInput.classList.remove('highlight');
  }
  selectedInput = target;
  selectedInput.classList.add('highlight'); // highlight the new td
}

function computeAndShowMoney() {
  console.log('sup')
  let bill = document.getElementById('bill-amount').value;
  let tipValue
  if (selectedInput && selectedInput.id === 'customTip') tipValue = selectedInput.value;
  else
    tipValue = selectedInput ? selectedInput.value.substr(0, selectedInput.value.length - 1) : 0;
  let tip = tipValue * 0.01
  let pplCount = document.getElementById('pplCount').value;
  let tipAmount = (pplCount && pplCount !== '0') ? bill * tip / pplCount : 0;
  let total = (pplCount && pplCount !== '0') ? tipAmount + bill / pplCount : 0;
  document.getElementById('tipAmount').innerText = tipAmount ? tipAmount.toFixed(2) : (0).toFixed(2);
  document.getElementById('totalAmount').innerText = total ? total.toFixed(2) : (0).toFixed(2);
}

Array.from(document.querySelectorAll('INPUT:not([type="button"]')).map(elem => elem.addEventListener('input', computeAndShowMoney))
document.getElementById('tip-options').addEventListener('click', selectTipOption);
document.getElementById('tip-options').addEventListener('click', computeAndShowMoney);

function validateInput(target) {
  let digitsRegex = /^\d+$/;
  if (target.value === '0' || target.value === '')
    return 'zero'
  if (!digitsRegex.test(target.value))
    return 'not a digit';
  return true;
}

Array.from(document.querySelectorAll('INPUT')).map(elem => {
  let oldval;
  elem.addEventListener('input', (event) => {
    if (event.target.id === 'pplCount' && validateInput(event.target) === 'zero') {
      oldval = "";
      notifyEmpty(true, event.target);
    }
    else if (validateInput(event.target) === 'not a digit') {
      event.target.value = oldval;
    }
    else {
      notifyEmpty(false, event.target);
      oldval = event.target.value
    }
  })
})

function notifyEmpty(toggle, target) {
  if (toggle === true) {
    target.classList.add('error');
    errorSpan.classList.remove('hidden');
  }
  else {
    target.classList.remove('error');
    errorSpan.classList.add('hidden');
  }
}

function handleReset() {
  for (let elem of document.querySelectorAll('INPUT:not([type="button"]')) {
    elem.value = '';
  }
  selectedInput.classList.remove('highlight');
  selectedInput = null;
  document.getElementById('tipAmount').innerText = (0).toFixed(2);
  document.getElementById('totalAmount').innerText = (0).toFixed(2);
}