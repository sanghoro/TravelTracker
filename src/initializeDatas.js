import { fetchAllDestinationData, fetchAllTripsData, fetchAllUserData, fetchSingleUserData } from "./apiCalls.js";

let allUsersData = [];
let allTripData = [];
let allDestinationData = [];
let allSingleUserData = [];

// export const userId = Number(document.querySelector('input[name="id"]').value.slice(8));

export const fetchAllData = () => {
  Promise.all([fetchAllUserData(), fetchSingleUserData(1), fetchAllTripsData(), fetchAllDestinationData()])
    .then(([allUserDataResult, singleUserDataResult, allTripsDataResult, allDestinationDataResult]) => {
      allUsersData = allUserDataResult;
      allTripData = allTripsDataResult;
      allDestinationData = allDestinationDataResult;
      allSingleUserData = singleUserDataResult;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};

fetchAllData();

export {
  allUsersData,
  allTripData,
  allDestinationData,
  allSingleUserData
};