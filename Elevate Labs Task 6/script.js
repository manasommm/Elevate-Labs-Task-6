const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateEmail(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  // Reset errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name cannot be empty.';
    valid = false;
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty.';
    valid = false;
  }

  if (valid) {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = `
      <div class="success-message">
        <p>🎉 Thanks for reaching out!</p>
        <p>We’ll get back to you ASAP 🚀</p>
        <div class="emoji">🥳</div>
      </div>
    `;
  }
});

