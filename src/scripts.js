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
  const dashView = document.getElementById('dashView');

  // Functions
  function hideLoginView() {
    loginBoxOne.classList.add('hide');
    loginBoxTwo.classList.add('hide');
    loginBoxThree.classList.add('hide');
    loginBoxFour.classList.add('hide');

    if (loginView) {
      loginView.classList.add('hide');
    }
    if (dashView) {
      dashView.classList.remove('hide');
    }
  }

  function showLoginView() {
    loginBoxOne.classList.remove('hide');
    loginBoxTwo.classList.remove('hide');
    loginBoxThree.classList.remove('hide');
    loginBoxFour.classList.remove('hide');

    if (loginView) {
      loginView.classList.remove('hide');
    }
    if (dashView) {
      dashView.classList.add('hide');
    }
  }

  // EventListeners
  if (loginButton) {
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();
      hideLoginView();
    });
  }

  if (turingLogo) {
    turingLogo.addEventListener('click', (e) => {
      e.preventDefault();
      showLoginView();
    });
  }
});