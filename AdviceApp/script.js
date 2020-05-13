const button = document.querySelector('button');
const advice = document.querySelector('.advice');

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const result = await response.json();
    console.log(result);
    advice.textContent = result.slip.advice;
}

button.addEventListener('click', () => {
    getAdvice();
});
