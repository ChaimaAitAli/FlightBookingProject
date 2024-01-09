const container = document.getElementById('container');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mail = document.getElementById('mail');
const psw1 = document.getElementById('psw1');
const psw2 = document.getElementById('psw2');

container.addEventListener('submitbtn' , e =>{
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message ;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
 
const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mailValue = mail.value.trim();
    const psw1Value = psw1.value.trim();
    const psw2Value = psw2.value.trim();

    if (fnameValue === ''){
        setError(fname , 'first name is required')
    }
    else {
        setSuccess(fname);
    }
} 