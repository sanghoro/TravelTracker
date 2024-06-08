import { allDestinationData } from "./initializeDatas";

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

export const viewPendingTrips = (trips) => {
  const dashContents = document.querySelector('.dashContents');
  
  dashContents.innerHTML = `
    <h2 class="title-center">Pending Trips</h2>
    <div class="trip-container"></div>
  `;
  
  const tripContainer = dashContents.querySelector('.trip-container');
  const pendingTrips = trips.filter(trip => trip.status === 'pending');

  if (pendingTrips.length === 0) {
    tripContainer.innerHTML = '<p>There are currently no pending travels <br> Book a trip today!</p>';
    return;
  }

  pendingTrips.forEach((trip) => {
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
  });
}