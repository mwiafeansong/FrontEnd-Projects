const queryContainer = document.querySelector('.query-container');
const thankYouModal = document.querySelector('.thank-you-modal');
const ratingBtns = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('.submit');
const ratingDisplay = document.getElementById('your-rating');

ratingBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        switchSelection(e);
        captureSelectedRating(e);
    })
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    queryContainer.classList.add('invisible');
    thankYouModal.classList.add('show');
})

function switchSelection(e) {
    for (let i = 0; i < ratingBtns.length; i++) {
        if (ratingBtns[i].classList.contains('selected')) {
            ratingBtns[i].classList.remove('selected');
            ratingBtns[i].classList.add('not-selected');
        }
    }
    e.target.classList.add('selected');
    e.target.classList.remove('not-selected');
}

function captureSelectedRating(e) {
    ratingDisplay.textContent = e.target.textContent;
}