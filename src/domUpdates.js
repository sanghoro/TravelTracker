//only DOM updating functions here

import { allDestinationData } from "./initializeDatas";
import { addAllExpense } from "./userFunctions";


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

export const viewPastTrips = (trips) => {
  const dashContents = document.querySelector('.dashContents');
  
  dashContents.innerHTML = `
    <h2 class="title-center">Past Trips</h2>
    <div class="trip-container"></div>
  `;
  
  const tripContainer = dashContents.querySelector('.trip-container');
  
  trips.forEach((trip) => {
    if (trip.status === 'approved') {
      const destination = allDestinationData.find(dest => dest.id === trip.destinationID);
      let destinationPic = '';

      if (destination) {
        destinationPic = destination.image;
      }

      const tripElement = document.createElement('div');
      tripElement.classList.add('trip');
      tripElement.innerHTML = `
        <img src="${destinationPic}" class="destination-pic" alt="Destination Picture">
        <p>Date: ${trip.date}</p>
        <p>Duration: ${trip.duration} days</p>
        <p>Status: ${trip.status}</p>
      `;
      tripContainer.appendChild(tripElement);
    }
  });
};

export const bookingCalculationForm = () => {
  const dashContents = document.querySelector('.dashContents');

  let destinationOptions = [];
  allDestinationData.forEach(place => {
    destinationOptions.push(`<option>${place.destination}</option>`);
  })

  let sortedDestinationOptions = destinationOptions.sort()

  dashContents.innerHTML = `
   <h2 class="title-center">Book Your Trips</h2>
    <form class="booking-form">
      <div>
        <label for="trip-date">Select Date:</label>
        <input type="date" class="trip-date" required>
      </div>
      <div>
        <label for="duration">Duration (days):</label>
        <input type="number" class="duration" min="1" required>
      </div>
      <div>
        <label for="travelers">Number of Travelers:</label>
        <input type="number" class="travelers" min="1" required>
      </div>
      <div>
        <label for="destinations">Choose Destination:</label>
        <select class="destinations" required>
          ${sortedDestinationOptions}
        </select>
      </div>
      <button type="submit" class="book-trip-button">Book Trip</button>
      <button class="book-trip-estimate-button">Get Estimate</button>
    </form>
  `;
}

export const viewPendingTrips = (trips) => {
  const dashContents = document.querySelector('.dashContents');
  
  dashContents.innerHTML = `
    <h2 class="title-center">Pending Trips</h2>
    <div class="pending-trip-container"></div>
  `;
  
  const tripContainer = dashContents.querySelector('.pending-trip-container');
  const pendingTrips = trips.filter(trip => trip.status === 'pending');

  if (pendingTrips.length === 0) {
    tripContainer.innerHTML = '<p>There are currently no pending travels <br> Book a trip today! </p>';
    return;
  }

  pendingTrips.forEach((trip) => {
    const destination = allDestinationData.find(dest => dest.id === trip.destinationID);
    let destinationPic = '';
    let destinationName = '';

    if (destination) {
      destinationPic = destination.image;
      destinationName = destination.destination;
    }

    const tripElement = document.createElement('div');
    tripElement.classList.add('trip');
    tripElement.innerHTML = `
      <img src="${destinationPic}" class="destination-pic" alt="Destination Picture">
      <p>"${destinationName}"</p>
      <p>Date: ${trip.date}</p>
      <p>Duration: ${trip.duration} days</p>
      <p>Status: ${trip.status}</p>
    `;
    tripContainer.appendChild(tripElement);
  });
}

export const displayExpenses = (userId) => {
  const expenseData = addAllExpense(userId);
  const totalAmountSpent = expenseData.totalAmountSpent
  const expenses = expenseData.expenses

  const dashContents = document.querySelector('.dashContents');

  if (totalAmountSpent === 0) {
    dashContents.innerHTML = `
      <h2 class="home-expense">Expense Summary for 2022</h2>
      <p>You didn't go to any places in 2022! <br> Book a trip today!</p>
    `;
  } else {
    dashContents.innerHTML = `
      <h2 class="home-expense">Expense Summary for 2022</h2>
      <p>Total amount spent: $${totalAmountSpent}</p>
      <div class="expense-details"></div>
    `;

    const expenseDetails = dashContents.querySelector('.expense-details')

    expenses.forEach(expense => {
      expenseDetails.innerHTML += `
        <p>You went to ${expense.destinationName} and spent $${expense.totalPrice}</p>
      `;
    });
  }
};