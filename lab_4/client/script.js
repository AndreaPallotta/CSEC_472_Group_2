document.addEventListener("DOMContentLoaded", () => {
   if (!axios) {
        alert('Error loading axios. Refresh the page and try again');
        return;
   }
});

document.querySelector('#login').addEventListener('click', (event) => {
    event.preventDefault();
    const formElements = document.querySelector('#form-container').elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    if (!username || !password) {
        alert('Please enter a username and password');
        return;
    }

    axios.post('http://localhost:3000/login', { username, password }, ).then((res) => {
        console.log('res', res);
    }).catch((err) => {
        alert('err', err.message);
    })
})