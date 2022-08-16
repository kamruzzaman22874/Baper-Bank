
document.getElementById('btn-input').addEventListener('click', function(){
    const userEmail = document.getElementById('user-input');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if(email === 'joybd@gmail.com' && password === '123'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Ekhane Rongbaji Cholbena')
    }
})









































// document.getElementById('btn-submit').addEventListener('click',function(){
//     const emailField = document.getElementById('user-email')
//     const email = emailField.value;
//     const passField = document.getElementById('user-password');
//     const password = passField.value;
//     if(email === 'joybd.eee@gmail.com' && password === '123456'){
//         window.location.href = 'bank.html';
//     }
//     else{
//         alert('You are not a my son')
//     }
// })
