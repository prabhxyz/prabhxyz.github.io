// Dark mode toggle functionality
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

function updateButtonLabel() {
    const isDark = body.classList.contains('dark-mode');
    toggleButton.textContent = isDark ? 'Light mode' : 'Dark mode';
}

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}
updateButtonLabel();

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save theme preference
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    updateButtonLabel();
});
