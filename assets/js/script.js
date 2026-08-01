document.addEventListener("DOMContentLoaded", function () {

    ```
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
    
        contactForm.addEventListener("submit", function (event) {
    
            event.preventDefault();
    
            const name =
                document.getElementById("name").value.trim();
    
            const phone =
                document.getElementById("phone").value.trim();
    
            const location =
                document.getElementById("location").value.trim();
    
            const service =
                document.getElementById("service").value;
    
            const message =
                document.getElementById("message").value.trim();
    
    
            const enquiryMessage =
    ```
    
    `Hello RehabNest Home Physiotherapy,
    
    New Physiotherapy Enquiry
    
    Name: ${name}
    Phone: ${phone}
    Location: ${location}
    Physiotherapy Requirement: ${service}
    Message: ${message}
    
    Please contact me regarding a home physiotherapy appointment.`;
    
    ```
            const whatsappURL =
                "https://wa.me/919503126974?text=" +
                encodeURIComponent(enquiryMessage);
    
    
            window.location.href = whatsappURL;
    
        });
    
    }
    ```
    
    });
    