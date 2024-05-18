document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Reset error messages
    document.getElementById('signup-error-message').innerText = '';
    document.getElementById('username').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('confirm-email').classList.remove('error');
    document.getElementById('phone').classList.remove('error');
    document.getElementById('password').classList.remove('error');
    document.getElementById('confirm-password').classList.remove('error');
  
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let confirmEmail = document.getElementById('confirm-email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirm-password').value.trim();
  
    // Validate username
    if (username.length < 3 || username.length > 20) {
      document.getElementById('username').classList.add('error');
      document.getElementById('signup-error-message').innerText = 'Username must be between 3 and 20 characters';
      return;
    }
  
    // Validate email
    if (!isValidEmail(email)) {
      document.getElementById('email').classList.add('error');
      document.getElementById('signup-error-message').innerText = 'Invalid email address';
      return;
    }
  
    // Validate confirm email
    if (email !== confirmEmail) {
      document.getElementById('confirm-email').classList.add('error');
      document.getElementById('signup-error-message').innerText = 'Email addresses do not match';
      return;
    }
  
    // Validate phone number
    if (!isValidPhoneNumber(phone)) {
      document.getElementById('phone').classList.add('error');
      document.getElementById('signup-error-message').innerText = 'Invalid phone number';
      return;
    }
  
    // Validate password
    if (password.length < 6 || password.length > 20) {
      document.getElementById('password').classList.add('error');
      document.getElementById('signup-error-message').innerText = 'Password must be between 6 and 20 characters';
      return;
    }
  
    // Validate confirm password
    if (password !== confirmPassword) {
      document.getElementById('confirm-password').classList.add('error');
      document.getElementById('signup-error-message').innerText = 'Passwords do not match';
      return;
    }
  
    // If all validations pass, you can proceed with the signup logic
    // For now, we'll just log the values
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
  
    // Reset the form
    document.getElementById('signup-form').reset();
  });
  
  function isValidEmail(email) {
    // Very basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function isValidPhoneNumber(phone) {
    // Basic phone number validation for 10 digits
    return /^\d{10}$/.test(phone);
  }
  