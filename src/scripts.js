// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import { fetchAllUserData } from './apiCalls';
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { fetchAllData } from './initializeDatas';




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
  const homeButton = document.querySelector('.navButton1');
  const bookButton = document.querySelector('.navButton2');
  const pendingButton = document.querySelector('.navButton3');
  const pastButton = document.querySelector('.navButton4');
  const aboutButton = document.querySelector('.navButton5');
  const dashContents = document.querySelector('.dashContents');

  fetchAllData();

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

  if(homeButton) {
    homeButton.addEventListener('click', (e) => {
        e.preventDefault();
        dashContents.innerHTML = `
        <p> Testing Home Contents</P>
        `;
    });
  }

  if(bookButton) {
    bookButton.addEventListener('click', (e) => {
        e.preventDefault();
        dashContents.innerHTML = `
        <p> Testing Book Contents </P>
        `;
    });
  }

  if(pendingButton) {
    pendingButton.addEventListener('click', (e) => {
        e.preventDefault();
        dashContents.innerHTML = `
        <p> Testing Pending Contents</P>
        `;
    });
  }

  if(pastButton) {
    pastButton.addEventListener('click', (e) => {
        e.preventDefault();
        dashContents.innerHTML = `
        <p> Testing Past Contents</P>
        `;
    });
  }

  if (aboutButton) {
    aboutButton.addEventListener('click', (e) => {
      e.preventDefault();
      dashContents.innerHTML = `
        <h2> Let's Connect! </h2>
        <br>
        <p>Website Created By Seong H. Kang</p>
        <a href="https://github.com/sanghoro" target="_blank">Check out my GitHub</a>
        <br>
        <a href="https://www.linkedin.com/in/seong-kang/" target="_blank">Check out my LinkedIn</a>
      `;
    });
  }
});

