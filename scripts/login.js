// pages/js/login.js

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Example: Redirect or save token
        localStorage.setItem('token', data.token);
        window.location.href = '/pages/wallet.html'; // Adjust path
      } else {
        loginError.textContent = data.message || 'Login failed';
      }
    } catch (error) {
      loginError.textContent = 'Something went wrong. Try again later.';
      console.error(error);
    }
  });
});
