// const adviceId = document.querySelector('.adviceId');
// const advice = document.querySelector('.advice');
const newAdviceBtn = document.querySelector('.newAdviceBtn');
const container = document.querySelector('.container');

const fetchAdvice = async () => {
  container.classList.add('loading');
  container.textContent = 'Loading...';
  const response = await fetch('https://api.adviceslip.com/advice', {
    mode: 'cors',
  });

  const data = await response.json();

  if (response.ok) {
    container.innerHTML = `<h1>ADVICE # ${data.slip.id}</h1><p><q>${data.slip.advice}</q></p>`;
    container.classList.remove('loading');
  } else {
    container.textContent = 'Problem fetching advice';
  }
};

fetchAdvice();

newAdviceBtn.addEventListener('click', () => {
  fetchAdvice();
});
