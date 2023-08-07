const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Perform API call or validation here
    const response = await fetch('https://64c78c9d0a25021fde92a9cb.mockapi.io/admin');
    const users = await response.json();

    const foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);

    if (foundUser) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to index page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
