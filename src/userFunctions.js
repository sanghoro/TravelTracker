import { fetchAllTripsData, fetchSingleUserData } from './apiCalls';
import { allUsersData, allTripData, allDestinationData, allSingleUserData } from './initializeDatas';
import { hideLoginSection, greetUser, viewPastTrips, viewPendingTrips } from './domUpdates.js';
import { hideLoginView, showLoginView } from './scripts.js';

export const handleLogin = (username, password) => {
  if (password !== 'travel') {
    alert('Invalid password');
    return;
  }
  
  const userId = Number(username.slice(8));
  console.log('userId>>', userId)
  const userData = allUsersData.find(user => user.id === userId);
  console.log('userData>>', userData)
  
  if (userData) {
    hideLoginView();
    hideLoginSection();
    greetUser(userData.name)
    fetchSingleUserData(userId)
  } else {
    alert('Invalid username');
  }
}

//past trips(?)

export const pastTrips = (userId) => {
  const tripData = allTripData.filter(user => user.userID === userId)
  viewPastTrips(tripData);
}

export const pendingTrips = (userId) => {
  const tripData = allTripData.filter(user => user.userID === userId)
  viewPendingTrips(tripData);
}


