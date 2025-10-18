
function validateForm(event) {
    const form = event.target;
    const requiredInputs = form.querySelectorAll('[required]');
    const successMessage = document.getElementById('success-message');
	
    let isFormValid = true;
	
    requiredInputs.forEach(input => {
        if (input.type !== 'radio' && input.type !== 'checkbox' && !input.value.trim()) {
            isFormValid = false;
        }
        if (input.type === 'checkbox' && !input.checked) {
            isFormValid = false;
        }
    });
	
    const radioButtons = form.querySelectorAll('input[name="query-type"]');
    const isRadioChecked = Array.from(radioButtons).some(radio => radio.checked);
	
    if (!isRadioChecked) {
        isFormValid = false;
    }
	
    if (isFormValid) {
        event.preventDefault();
		
        successMessage.style.display = 'block';
        form.querySelector('h1').style.display = 'none';
        form.querySelectorAll('.fieldset-info, .form-group, .fieldset-query-type, .div-checkbox-contacte, #btn-submit').forEach(el => {
            el.style.display = 'none';
        });
		
        return false; 
		
    } else {
        return true;
    }
}