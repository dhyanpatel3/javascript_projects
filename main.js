document.addEventListener("DOMContentLoaded", function () {
    function show() {
        // Get values from input fields
        let name = document.getElementById("myName").value;
        let email = document.getElementById("myEmail").value;
        let dob = document.getElementById("myDOB").value;
        let division = document.getElementById("myDivision").value; // From dropdown
        let enrollNumber = document.getElementById("myEnroll").value;
        let city = document.getElementById("myCity").value;

        // Log collected data to the console
        console.log({ name, email, dob, division, enrollNumber, city });

        // Display thank you message
        document.getElementById("thankYouMessage").style.display = "block";
    }

    // Add event listener to the button
    document.getElementById("mybutton").addEventListener("click", show);
});