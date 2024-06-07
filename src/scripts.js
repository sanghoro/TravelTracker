// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import './images/turing-logo.png';
import { fetchAllData } from './initializeDatas';
import { handleLogin } from './userFunctions.js';

// Global Variables
const loginBoxOne = document.querySelector('.LoginBoxOne');
const loginBoxTwo = document.querySelector('.LoginBoxTwo');
const loginBoxThree = document.querySelector('.LoginBoxThree');
const loginBoxFour = document.querySelector('.LoginBoxFour');
const loginView = document.getElementById('loginView');
const dashView = document.getElementById('dashView');
const loginButton = document.querySelector('.LoginButton');
const turingLogo = document.querySelector('.turing-logo');
const homeButton = document.querySelector('.navButton1');
const bookButton = document.querySelector('.navButton2');
const pendingButton = document.querySelector('.navButton3');
const pastButton = document.querySelector('.navButton4');
const aboutButton = document.querySelector('.navButton5');
const dashContents = document.querySelector('.dashContents');
const logoutButton = document.querySelector('.LogOutButton');

// Functions
export function hideLoginView() {  
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

export function showLoginView() {
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
document.addEventListener('DOMContentLoaded', () => {
  fetchAllData();

  if (loginButton) {
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();
      const loginID = document.querySelector('input[name="id"]').value;
      const loginPW = document.querySelector('input[name="password"]').value;

      if (!loginID) {
        alert("Please enter your ID");
      } else if (!loginPW) {
        alert("Please enter your password");
      } else {
        handleLogin(loginID, loginPW);
      }
    });
  }

  // if (turingLogo) {
  //   turingLogo.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     alert("You will be logged out")
  //     showLoginView();
  //   });
  // }

  if (homeButton) {
    homeButton.addEventListener('click', (e) => {
      e.preventDefault();
      dashContents.innerHTML = `
        <p> Testing Home Contents</p>
      `;
    });
  }

  if (bookButton) {
    bookButton.addEventListener('click', (e) => {
      e.preventDefault();
      dashContents.innerHTML = `
        <p> Testing Book Contents </p>
      `;
    });
  }

  if (pendingButton) {
    pendingButton.addEventListener('click', (e) => {
      e.preventDefault();
      dashContents.innerHTML = `
        <p> Testing Pending Contents</p>
      `;
    });
  }

  if (pastButton) {
    pastButton.addEventListener('click', (e) => {
      e.preventDefault();
      dashContents.innerHTML = `
        <p> Testing Past Contents</p>
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