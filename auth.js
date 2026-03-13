function updateAuthUI() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const authBtn = document.getElementById('authBtn');
    if (loggedUser && authBtn) {
        authBtn.textContent = 'Hi, ${loggedUser.name}!';
        authBtn.onclick = function() {
            localStorage.removeItem('user');
            location.reload();
        };
    } else if (authBtn) {
        authBtn.textContent = 'Login / Register';
        authBtn.onclick = function() {
            location.href = 'login.html';
        };
    }
}