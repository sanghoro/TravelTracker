import { fetchSingleUserData } from './apiCalls';
import { allUsersData } from './initializeDatas';
import { hideLoginSection, greetUser } from './domUpdates.js';
import { hideLoginView, showLoginView } from './scripts.js';

export const handleLogin = (username, password) => {
  if (password !== 'travel') {
    alert('Invalid password');
    return;
  }

  const userId = Number(username.slice(8));
  const userData = allUsersData.find(user => user.id === userId);
  console.log('logged in userData', userData)
  if (userData) {
    hideLoginView();
    hideLoginSection();
    greetUser(userData.name)
  } else {
    alert('Invalid username');
  }
}

