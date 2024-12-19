   function generatePassword() {
            const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowercase = "abcdefghijklmnopqrstuvwxyz";
            const numbers = "0123456789";
            const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
            const allCharacters = uppercase + lowercase + numbers + specialCharacters;
            const passwordLength = parseInt(document.getElementById("length").value, 10);
            let password = "";

            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * allCharacters.length);
                password += allCharacters[randomIndex];
            }

            document.getElementById("password").value = password;
            document.getElementById("game-status").textContent = "Password generated successfully!";
        }

        function copyPassword() {
            const passwordField = document.getElementById("password");
            passwordField.select();
            passwordField.setSelectionRange(0, 99999); // For mobile devices
            navigator.clipboard.writeText(passwordField.value)
                .then(() => {
                    document.getElementById("game-status").textContent = "Password copied to clipboard!";
                })
                .catch(err => {
                    document.getElementById("game-status").textContent = "Failed to copy password.";
                });
        }