document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('newsletter-popup');
    var submitButton = document.getElementById('submit-button');   //Imorterar objekt från html     
    var noButton = document.getElementById('no-button');

    // visar efter 2.5s
    setTimeout(function() {
        popup.style.display = 'block';
    }, 2500);

    submitButton.addEventListener('click', function() {
        var emailInput = document.getElementById('email-input');
        if (emailInput.value.trim() !== '') {  // kollar ifall den är tom
            popup.style.display = 'none'; // tar bort den
        } else {
            alert('Please enter a valid email address.');
        }
    });

    noButton.addEventListener('click', function() {
        popup.style.display = 'none'; // tar bort den//gömmer
    });
});

function addToCart() {
    alert("Successfully added to cart!");
}
