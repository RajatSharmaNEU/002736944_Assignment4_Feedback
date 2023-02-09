const emailId = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@northeastern.edu$/;
const phoneNumber = /\d{3}-?\d{3}-\d{4}$/;
const zipcode = /^[0-9]{5}(?:-[0-9]{4})?$/;


const inputRegExs = {emailId, phoneNumber, zipcode};
const submitBtn = document.getElementById('submit');

const formElement = document.getElementsByTagName('form')[0];

const isValidForm = {
    'firstName': false,
    'lastName': false,
    'emailId': false,
    'phoneNumber': false,
    'streetAddress1': false,
    'city': false,
    'state': false,
    'zipcode': false,
    'comments': false,
}

const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');
const emailIdElement = document.getElementById('emailId');
const phoneNumberElement = document.getElementById('phoneNumber');
const streetAddress1Element = document.getElementById('streetAddress1');
const cityElement = document.getElementById('city');
const stateElement = document.getElementById('state');
const zipcodeElement = document.getElementById('zipcode');
const commentsElement = document.getElementById('comments');

const disableSubmit = () => {
    let disableButton = true;
    for (const isValid in isValidForm) {
        disableButton = disableButton && isValidForm[isValid];
    }
    submitBtn.disabled = !disableButton;
}

const validateInput = (event) => {
    const input = event.target;
    const inputValue = input.value;
    const inputName = input.name;
    let isValid = inputValue.length > 0;
    if(inputRegExs[inputName]){
        isValid = inputValue.trim().match(inputRegExs[inputName]);
    }
    isValidForm[inputName] = isValid;
    const errorDivision = document.getElementById(`${inputName}_error`);
    if (errorDivision) {
        errorDivision.style.display = isValid ? 'none' : 'block';
    }
    disableSubmit();
};

firstNameElement.addEventListener('focus', validateInput)
lastNameElement.addEventListener('focus', validateInput)
emailIdElement.addEventListener('focus', validateInput)
phoneNumberElement.addEventListener('focus', validateInput)
streetAddress1Element.addEventListener('focus', validateInput)
cityElement.addEventListener('focus', validateInput)
stateElement.addEventListener('focus', validateInput)
zipcodeElement.addEventListener('focus', validateInput)
commentsElement.addEventListener('focus', validateInput)

firstNameElement.addEventListener('blur', validateInput)
lastNameElement.addEventListener('blur', validateInput)
emailIdElement.addEventListener('blur', validateInput)
phoneNumberElement.addEventListener('blur', validateInput)
streetAddress1Element.addEventListener('blur', validateInput)
cityElement.addEventListener('blur', validateInput)
stateElement.addEventListener('blur', validateInput)
zipcodeElement.addEventListener('blur', validateInput)
commentsElement.addEventListener('blur', validateInput)
