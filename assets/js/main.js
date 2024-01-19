const contactForm = document.querySelector( '#contacts-form' );
const contactName = document.querySelector( '#contact-name' );
const contactEmail = document.querySelector( '#contact-email' );
const contactMessage = document.querySelector( '#contact-message' );

contactForm.addEventListener( 'submit', ( event ) => {
    event.preventDefault();

    const formData = {
        name: contactName.value,
        email: contactEmail.value,
        message: contactMessage.value
    };

    validateInput( formData.name, formData.email );
} );

const emailError = document.querySelector( '#email-error' );
const nameError = document.querySelector( '#name-error' );

function validateInput ( name, email ) {
    let nameArr = name.split( ' ' );
    name = nameArr.join( '' ).trim();
    email = email.trim();

    if ( !/^[a-zA-Z]+$/.test( name ) ) {
        nameError.style.display = 'block';
        nameError.textContent = 'Please enter a valid name';
    } else {
        nameError.style.display = 'none';
        nameError.textContent = '';
    }

    if ( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email ) ) {
        emailError.style.display = 'block';
        emailError.textContent = 'Please enter a valid email';
    } else {
        emailError.style.display = 'none';
        emailError.textContent = '';
    }

    if ( nameError.style.display === 'none' && emailError.style.display === 'none' ) {
        alert( 'Form submitted successfully, Thank you for your message' );

        contactName.value = '';
        contactEmail.value = '';
        contactMessage.value = '';
    }

}
