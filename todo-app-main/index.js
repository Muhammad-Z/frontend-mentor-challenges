var myNodelist = document.getElementsByTagName("LI");
var i;
var countBud = 0;
var activeBtn;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    if (!div.classList.contains('checked')) updateCountBud('decrement');
    div.remove();
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    if (ev.target.classList.contains('checked')) updateCountBud('decrement');
    else updateCountBud('increment');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("elementInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("elementInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  updateCountBud('increment')

  span.onclick = function () {
    var div = this.parentElement;
    if (!div.classList.contains('checked')) updateCountBud('decrement');
    div.remove();
  }
}


function handleClearCompletedEvent() {
  var list = document.getElementById('list');
  let idk = list.querySelectorAll('LI');
  for (var elem of idk) {
    if (elem.classList.contains('checked')) /* elem.style.display = "none"; */
      elem.remove();
  }
}

function handleClickAllEvent() {
  var list = document.getElementById('list');
  for (var elem of list.getElementsByTagName('LI')) {
    elem.style.display = "block";
  }
}

function handleClickActiveEvent() {
  var list = document.getElementById('list');
  for (var elem of list.getElementsByTagName('LI')) {
    if (elem.classList.contains('checked'))
      elem.style.display = "none";
    else elem.style.display = "block";
  }
}

function handleClickCompletedEvent() {
  var list = document.getElementById('list');
  for (var elem of list.getElementsByTagName('LI')) {
    if (elem.classList.contains('checked'))
      elem.style.display = "block";
    else elem.style.display = "none";
  }
}

function updateCountBud(op) {
  if (op === 'increment')
    countBud++;
  else if (op === 'decrement')
    countBud--;
  theSpan.innerText = countBud;
}

function handleActiveBtnClickEvent(event) {
  if (activeBtn) activeBtn.classList.remove('activeBtn');
  if (event.target.tagName === 'BUTTON') {
    activeBtn = event.target;
    activeBtn.classList.add('activeBtn');
  }
}

function handleThemeChooserClickEvent() {
  var span = document.getElementById('theme-chooser')
  if (span.classList.contains('light')) {
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    span.classList.remove('light')
    span.classList.add('dark')
  }

  else {
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
    span.classList.remove('dark')
    span.classList.add('light')
  }
}