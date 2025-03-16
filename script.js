
document.querySelector('.open-form').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
}