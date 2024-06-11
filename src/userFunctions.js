//imports
import { allUsersData, allTripData, allDestinationData } from './initializeDatas';
import { greetUser, viewPastTrips, viewPendingTrips, displayUpcomingTrips } from './domUpdates.js';
import { addAllExpense, hideLoginSection, hideLoginView, showLoginView } from './scripts.js';

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

//Exports
export { currentUser };