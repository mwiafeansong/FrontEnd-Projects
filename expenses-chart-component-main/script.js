const amounts = document.querySelectorAll('.amount');
const bars = document.querySelectorAll('.bar');
const days = document.querySelectorAll('.day');

getData();

// make amounts appear when bars are hovered on
for (let i = 0; i < 7; i++) {
  bars[i].addEventListener('mouseover', (e) => {
    amounts[i].classList.remove('invisible');
  });

  bars[i].addEventListener('mouseout', (e) => {
    amounts[i].classList.add('invisible');
  });
}

// FUNCTIONS
//fetches data from json file and displays the info
async function getData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  fillData(data);
}

//fills data into the UI
function fillData(data) {
  for (let i = 0; i < 7; i++) {
    days[i].textContent = data[i].day;
    amounts[i].textContent = `$${data[i].amount}`;
    bars[i].style.height = `${data[i].amount * 3}px`;
    bars[i].classList.add('barStyle');

    if (capitalize(data[i].day) == new Date().toUTCString().slice(0, 3)) {
      bars[i].classList.add('today');
    } else {
      bars[i].classList.remove('today');
    }
  }
}

//helper function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
