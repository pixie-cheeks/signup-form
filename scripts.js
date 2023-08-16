const initialPassword = document.querySelector('input#password');
const confirmPassword = document.querySelector('input#conf-password');
const mismatchOut = document.querySelector('.mismatch');

initialPassword.addEventListener('blur', validate);
confirmPassword.addEventListener('blur', validate);


function checkIfEmpty() {
	return initialPassword.value === '' || confirmPassword.value === '';
}

function validate() {
	if (checkIfEmpty()) return;
	const firstPass = initialPassword.value;
	const secondPass = confirmPassword.value;
	if (firstPass === secondPass) {
		initialPassword.className = '';
		confirmPassword.className = '';
		mismatchOut.textContent = '';
	} else {
		initialPassword.className = 'error';
		confirmPassword.className = 'error';
		mismatchOut.textContent = '* Passwords do not match';
	}
}