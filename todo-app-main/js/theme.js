const darkBtn = document.querySelector('.dark');
const lightBtn = document.querySelector('.light');
const mode = window.localStorage.getItem('mode');

const setMode = () => {
  if (mode === 'dark') {
    setDarkMode();
    setLightIcon();
  } else {
    setLightMode();
    setDarkIcon();
  }

  darkBtn.addEventListener('click', () => {
    setDarkMode();
    setLightIcon();
  });

  lightBtn.addEventListener('click', () => {
    setLightMode();
    setDarkIcon();
  });

  function setDarkMode() {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    window.localStorage.setItem('mode', 'dark');
  }

  function setLightMode() {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    window.localStorage.setItem('mode', 'light');
  }

  function setDarkIcon() {
    lightBtn.classList.add('invisible');
    darkBtn.classList.remove('invisible');
  }

  function setLightIcon() {
    lightBtn.classList.remove('invisible');
    darkBtn.classList.add('invisible');
  }
};

export default setMode;
