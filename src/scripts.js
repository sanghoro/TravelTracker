// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

//I'm storing all buttons related functions in here

import { addNewTrip, fetchSingleUserData } from './apiCalls.js';
import './css/styles.css';
import { bookingCalculationForm, displayExpenses, displayHomeUser, viewPendingTrips } from './domUpdates.js';
import './images/turing-logo.png';
import { allDestinationData, fetchAllData, allTripData, userId } from './initializeDatas';
import { calculateEstimate, handleLogin, upcomingTrips } from './userFunctions.js';
import { pastTrips, pendingTrips, currentUser } from './userFunctions.js';

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

  //NAV BAR ICONS
  if (homeButton) {
    homeButton.addEventListener('click', (e) => {
      e.preventDefault();
      const loginID = document.querySelector('input[name="id"]').value;
      const userId = Number(loginID.slice(8));
      displayExpenses(userId);
      displayHomeUser(userId)
      upcomingTrips(userId)
    });
  }

  if (bookButton) {
    bookButton.addEventListener('click', (e) => {
      e.preventDefault();
      bookingCalculationForm(allDestinationData);
      getEstimate();
      handleTripBooking();
    });
  }

  if (pendingButton) {
    pendingButton.addEventListener('click', (e) => {
      e.preventDefault();
      const loginID = document.querySelector('input[name="id"]').value;
      const userId = Number(loginID.slice(8));
      pendingTrips(userId);
    });
  }

  if (pastButton) {
    pastButton.addEventListener('click', (e) => {
      e.preventDefault();
      const loginID = document.querySelector('input[name="id"]').value;
      const userId = Number(loginID.slice(8));
      pastTrips(userId);
    });
  }

  if (aboutButton) {
    aboutButton.addEventListener('click', (e) => {
      e.preventDefault();
      dashContents.innerHTML = `
        <h2> Let's Connect! </h2>
        <br>
        <p>Website Created By Seong H. Kang</p>
        <a href="https://github.com/sanghoro" target="_blank"> Check out my Github!
        </a>
        <br>
        <a href="https://www.linkedin.com/in/seong-kang/" target="_blank"> Check out my LinkedIn!
        </a>
      `;
    });
  }
});
  
//Book-A-Trip
function handleTripBooking() {
  const bookTripButton = document.querySelector('.book-trip-button');
  
  if (bookTripButton) {
    bookTripButton.addEventListener('click', (e) => {
      e.preventDefault();
      submitNewTrip();
    });
  }
}
function getEstimate(){
  const estimateButton = document.querySelector('.book-trip-estimate-button')

  if(estimateButton){
    estimateButton.addEventListener('click', (e) => {
      e.preventDefault();
      calculateEstimate();
    })
  }
}

function submitNewTrip() {
  const date = document.querySelector('.trip-date').value;
  const duration = document.querySelector('.duration').value;
  const travelers = document.querySelector('.travelers').value;
  const destinationName = document.querySelector('.destinations').value;

  const destination = allDestinationData.find(place => place.destination === destinationName);
  const destinationID = destination.id;

  const formattedDate = date.replace(/-/g, '/');

  const newTrip = {
    id: Date.now().toString(),
    userID: currentUser.id,
    destinationID: destinationID,
    travelers: Number(travelers),
    date: formattedDate,
    duration: Number(duration),
    status: 'pending',
    suggestedActivities: []
  };

  addNewTrip(newTrip).then(data => {
    if (data) {
      allTripData.push(newTrip);
      const userId = currentUser.id;
      const tripData = allTripData.filter(trip => trip.userID === userId && trip.status === 'pending');
      viewPendingTrips(tripData);
    }
  });
}
