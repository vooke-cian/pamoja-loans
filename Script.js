const loanForm = document.getElementById("loanForm");

if (loanForm) {
    loanForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const amount = Number(document.getElementById("amount").value);

        if (amount < 100) {
            alert("The sample amount must be at least 100.");
            return;
        }

        alert("Demo form submitted successfully!");

        window.location.href = "success.html";
    });
}
