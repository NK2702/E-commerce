document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    if (username === 'yourusername' && password === 'yourpassword') {
      alert('Login successful!');
      // Redirect to dashboard or another page
    } else {
      document.getElementById('login-error-message').innerText = 'Invalid username or password';
    }
  });
  