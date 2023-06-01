const GetStartedBtn = document.querySelector('section button');
const GetStartedEmailInput = document.querySelector('section input');
const GetStartedMessage = document.querySelector('section span');


const GetStartedForFreeBtn = document.querySelector('.early-access button');
const GetStartedForFreeEmailInput = document.querySelector('.early-access input');
const GetStartedForFreeMessage = document.querySelector('.early-access span');

GetStartedBtn.addEventListener('click', () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const email = GetStartedEmailInput.value;
    if (emailRegex.test(email)) {
        GetStartedMessage.style.display = 'none';
        console.log('Email is valid');
        return
    }
    GetStartedMessage.style.display = 'block';
})


GetStartedForFreeBtn.addEventListener('click', () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const email = GetStartedForFreeEmailInput.value;
    if (emailRegex.test(email)) {
        GetStartedForFreeMessage.style.display = 'none';
        console.log('Email is valid');
        return
    }
    GetStartedForFreeMessage.style.display = 'block';
})