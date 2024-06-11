// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

//I'm storing all buttons related functions in here

import { addNewTrip, fetchSingleUserData } from './apiCalls.js';
import './css/styles.css';
import { bookingCalculationForm, displayExpenses, displayHomeUser, viewPendingTrips, viewPastTrips, displayUpcomingTrips } from './domUpdates.js';
import { allDestinationData, fetchAllData, allTripData, userId } from './initializeDatas';
import { handleLogin, currentUser } from './userFunctions.js';
import { pastTrips, pendingTrips, upcomingTrips,calculateEstimate} from './functions.js';


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
      const upcomingTripsData = upcomingTrips(userId, allTripData);
      displayExpenses(userId);
      displayHomeUser(userId)
      displayUpcomingTrips(upcomingTripsData)
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
      const tripData = pendingTrips(userId, allTripData); 
      viewPendingTrips(tripData); 
    });
  }

  if (pastButton) {
    pastButton.addEventListener('click', (e) => {
      e.preventDefault();
      const loginID = document.querySelector('input[name="id"]').value;
      const userId = Number(loginID.slice(8));
      const trips = pastTrips(userId, allTripData);
      viewPastTrips(trips);
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
function getEstimate() {
  const estimateButton = document.querySelector('.book-trip-estimate-button');

  if (estimateButton) {
    estimateButton.addEventListener('click', (e) => {
      e.preventDefault();

      const duration = Number(document.querySelector('.duration').value);
      const travelers = Number(document.querySelector('.travelers').value);
      const destinationName = document.querySelector('.destinations').value;

      const estimate = calculateEstimate(duration, travelers, destinationName, allDestinationData);

      if (estimate.error) {
        alert(estimate.error);
      } else {
        alert(`
          Estimated for flight and lodging: $${estimate.totalEstimate}
          Agent fee of 10% : $${estimate.agentFee}
          The grand total will be : $${estimate.totalPrice}
        `);
      }
    });
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

export const addAllExpense = (userId) => {
  const userTrips = allTripData.filter(trip => trip.userID === userId);
  const tripsIn2021 = userTrips.filter(trip => trip.date.startsWith('2021'));

  let totalAmountSpent = 0;
  let expenses = [];

  tripsIn2021.forEach(trip => {
    const destination = allDestinationData.find(dest => dest.id === trip.destinationID);

    const flightCost = destination.estimatedFlightCostPerPerson * trip.travelers;
    const lodgingCost = destination.estimatedLodgingCostPerDay * trip.duration * trip.travelers;
    const totalEstimate = flightCost + lodgingCost;
    const agentFee = totalEstimate * 0.10;
    const totalPrice = totalEstimate + agentFee;

    expenses.push({
      destinationName: destination.destination,
      flightCost,
      lodgingCost,
      agentFee,
      totalPrice
    });

    totalAmountSpent += totalPrice;
  });
  return {totalAmountSpent, expenses}
};