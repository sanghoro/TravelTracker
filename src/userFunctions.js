//all user related functions here

//imports
import { allUsersData, allTripData, allDestinationData, allSingleUserData } from './initializeDatas';
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

export const pastTrips = (userId) => {
  const tripData = allTripData.filter(trip => {
    const tripDate = new Date(trip.date);
    const cutoffDate = new Date('2022/07/07');
    return trip.userID === userId && tripDate < cutoffDate;
  });
  viewPastTrips(tripData);
}

export const upcomingTrips = (userId) => {
  const tripData = allTripData.filter(trip => {
    const tripDate = new Date(trip.date);
    const cutoffDate = new Date('2022-07-07');
    return trip.userID === userId && tripDate >= cutoffDate && trip.status === 'approved';
  });
  displayUpcomingTrips(tripData);
}

export const pendingTrips = (userId) => {
  const tripData = allTripData.filter(user => user.userID === userId)
  viewPendingTrips(tripData);
}

export const calculateEstimate = () => {
  const duration = document.querySelector('.duration').value;
  const travelers = document.querySelector('.travelers').value;
  const destinationName = document.querySelector('.destinations').value;

  const getDestinationInfo = allDestinationData.find(destin => destin.destination === destinationName)

  const totalFlight = getDestinationInfo.estimatedFlightCostPerPerson * travelers;
  const totalLodging = getDestinationInfo.estimatedLodgingCostPerDay * duration;
  const totalEstimate = totalFlight + totalLodging;
  const agentFee = (totalEstimate / 10)
  const totalPrice = totalEstimate + agentFee;

  alert(`
      Estimated for flight and lodging: $${totalEstimate}
      Agent fee of 10% : $${agentFee}
      The grand total will be : $${totalPrice}
    `)
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