//all user login related functions here

//imports
import { allUsersData, allTripData, allDestinationData } from './initializeDatas';
import { hideLoginSection, greetUser, viewPastTrips, viewPendingTrips, displayUpcomingTrips } from './domUpdates.js';
import { hideLoginView, showLoginView } from './scripts.js';

//global variables
let currentUser = null;

//functions
export const handleLogin = (username, password) => {
  if (password !== 'travel') {
    alert('Invalid password');
    return;
  }
  
  const userId = Number(username.slice(8));
  const userData = allUsersData.find(user => user.id === userId);
  
  if (userData) {
    currentUser = userData;
    hideLoginView();
    hideLoginSection();
    greetUser(userData.name)
    addAllExpense(userId)
  } else {
    alert('Invalid username');
  }
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


//Exports
export { currentUser };