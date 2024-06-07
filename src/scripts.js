// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

document.addEventListener('DOMContentLoaded', () => {
  // Global Variables
  const loginButton = document.querySelector('.LoginButton');
  const loginBoxOne = document.querySelector('.LoginBoxOne');
  const loginBoxTwo = document.querySelector('.LoginBoxTwo');
  const loginBoxThree = document.querySelector('.LoginBoxThree');
  const loginBoxFour = document.querySelector('.LoginBoxFour');
  const turingLogo = document.querySelector('.turing-logo');
  const loginView = document.getElementById('loginView');

  // EventListeners
  if (loginButton) {
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();

      loginBoxOne.style.display = 'none';
      loginBoxTwo.style.display = 'none';
      loginBoxThree.style.display = 'none';
      loginBoxFour.style.display = 'none';

      if (loginView) {
        loginView.classList.add('hide');
      }
    });
  }

  if (turingLogo) {
    turingLogo.addEventListener('click', (e) => {
      e.preventDefault();

      loginBoxOne.style.display = 'block';
      loginBoxTwo.style.display = 'block';
      loginBoxThree.style.display = 'block';
      loginBoxFour.style.display = 'block';

      if (loginView) {
        loginView.classList.remove('hide');
      }
    });
  }
});