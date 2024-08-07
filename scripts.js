document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
  });
 function handleSubmit(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Perform any desired form processing here (e.g., sending data to the server)

            // Clear the form
            document.getElementById('myForm').reset();

            // Optionally, provide feedback to the user
            alert('Form submitted successfully!');

            return false; // Prevent the form from submitting normally
        }
    