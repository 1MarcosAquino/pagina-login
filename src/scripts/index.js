function forgetPassword() {
    document.querySelector('main').style.filter = 'blur(3px)';
    document.querySelector('.modal').style.display = 'flex';
}
function closeModal() {
    document.querySelector('main').style.filter = 'blur(0px)';
    document.querySelector('.modal').style.display = 'none';
}
