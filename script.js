const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Language switch functionality
const languageBtn = document.getElementById('languageBtn');
if (languageBtn) {
    languageBtn.addEventListener('click', function() {
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage === 'index.html') {
            window.location.href = 'en_index.html';
        } else if (currentPage === 'en_index.html') {
            window.location.href = 'index.html';
        }
    });
}
