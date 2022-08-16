document.getElementById('btn-login').addEventListener('click', function(){
    let emailInput = document.getElementById('email');
    let email = emailInput.value;
    let passwordInput = document.getElementById('password');
    let password = passwordInput.value;
    
    if(email === 'euhan@sarkar.com' && password === 'amir'){
        window.location.href = 'dashboard.html'
    }else{
        console.log('invalid user')
    }
    

    emailInput.value = '';
    passwordInput.value = '';
})