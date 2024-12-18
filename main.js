const submitButton = document.getElementById('mybutton');
const nameInput = document.getElementById('myName');
const thankYouMessage = document.getElementById('thankYouMessage');

submitButton.addEventListener('click', () => {
    // Set the thank-you message dynamically when the button is clicked
    thankYouMessage.innerText = `${nameInput.value}, thank you for submitting your details!`;
    thankYouMessage.style.display = 'block';
});