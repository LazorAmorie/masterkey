document.getElementById('signup-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const user = {
    username: document.getElementById('username').value.trim(),
    email: document.getElementById('email').value.trim(),
    password: document.getElementById('password').value.trim()
  };

  try {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    const data = await res.json();
    if (res.ok) {
      alert('Registration successful');
      window.location.href = 'login.html';
    } else {
      alert(data.message || 'Registration failed');
    }
  } catch (err) {
    console.error('Signup error:', err);
    alert('Could not connect to server.');
  }
});
