const submitButton = document.getElementById('mybutton');
const nameInput = document.getElementById('myName');
const emailInput = document.getElementById('myEmail');
const dobInput = document.getElementById('myDOB');
const divisionInput = document.getElementById('myDivision');
const enrollInput = document.getElementById('myEnroll');
const cityInput = document.getElementById('myCity');
const thankYouMessage = document.getElementById('thankYouMessage');

submitButton.addEventListener('click', () => {
    // Set the thank-you message dynamically when the button is clicked
    thankYouMessage.innerText = `${nameInput.value}, thank you for submitting your details!`;
    thankYouMessage.style.display = 'block';
    
    // Log all form information to browser console
    console.log('Form Submission Details:');
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Date of Birth:', dobInput.value);
    console.log('Division:', divisionInput.value);
    console.log('Enrollment Number:', enrollInput.value);
    console.log('City:', cityInput.value);
});