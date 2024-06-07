export const hideLoginSection = () => {
    const idInput = document.querySelector('.id');
    const pwInput = document.querySelector('.password');
    const loginButton = document.querySelector('.LoginButton');
    const logoutButton = document.querySelector('.LogOutButton');
  
    idInput.classList.add('hide');
    pwInput.classList.add('hide');
    loginButton.classList.add('hide');
    logoutButton.classList.remove('hidden');
  };
  

export const greetUser = (username) => {
    const greetingElement = document.querySelector('.greeting');
    greetingElement.innerHTML = `Welcome <br> ${username}!`;
}

