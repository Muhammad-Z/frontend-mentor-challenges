const validInput = {};

function handleConfirm(event) {
  event.preventDefault();
  if (checkEmptyInputs) {
    if (!checkEmptyInputs()) { document.getElementById('confirmSpan-error').style.display = "initial"; return false; }
    document.getElementById('form').classList.add('hidden');
    document.getElementById('completed-form').classList.remove('hidden');
  }
}

function showData(event) {
  let elem = document.getElementById(event.target.dataset.affect);
  elem.innerText = event.target.value;
}

function checkValidation(event, date = 'undefined') {
  showData(event)
  const value = event.target.value;
  const target = event.target;
  const reg = /^\d\d$/;
  if (value === '') {
    toggleAndShowError(true, target, "can't be blank");
    return;
  }
  if (target.id === "card-name-input") {
    validInput[target.id] = true;
    toggleAndShowError(false, target);
    return;
  } //no need to validate
  if (!reg.test(value)) {
    toggleAndShowError(true, target, "wrong format, numbers only");
  }

  if ((date === 'mm' && !(/^(0?\d$)|1[012]$/.test(target.value))) || (date === 'yy' && !(/^[1-9][1-9]$/.test(target.value)))) {
    toggleAndShowError(true, target, "wrong format");
    return
  }
/*   if (date === 'yy' && !(/^[1-9][1-9]$/.test(target.value))) {
    toggleAndShowError(true, target, "wrong format");
    return
  } */

  else {
    toggleAndShowError(false, target);
  }
}

function toggleAndShowError(show, target, message = "Can't be blank") {
  let errorSpan = document.getElementById(target.name + '-error');
  if (show) {
    if (target.classList.contains('wrong-input')) return;
    target.classList.add('wrong-input');
    errorSpan.innerHTML = message;
    errorSpan.style.display = "initial";
    validInput[target.id] = false;
  }
  else {
    errorSpan.style.display = "none";
    target.classList.remove('wrong-input');
    validInput[target.id] = true;
  }
}

function checkEmptyInputs() {
  let something = Array.from(document.querySelectorAll('input')).filter(elem => !validInput[elem.id]);
  something.map(elem => {
    toggleAndShowError(true, elem, "Can't be blank");
  })
  if (something.length > 0) return false;
  else return true;
}