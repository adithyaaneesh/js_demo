emailjs.init({
    publicKey: "N_P_maALXJ-QO5qDi"
});

let contactForm = document.getElementById("contactForm");

contacttForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send(
        "service_k2x3mai",
        "template_ral7oim",
        templateParams
    )
    .then( (response) => {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("status").textContent =
            "Message sent successfully!";
        let stat = document.getElementById("status");
        stat.classList.add("success")
        contactForm.reset();
    })
    .catch((error) => {
        console.log("FAILED...", error);
        document.getElementById("status").textContent =
            "Failed to send message.";
        let stat = document.getElementById("status");
        stat.classList.add("error")
    });
});