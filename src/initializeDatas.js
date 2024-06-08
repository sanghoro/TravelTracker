import { fetchAllDestinationData, fetchAllTripsData, fetchAllUserData, fetchSingleUserData } from "./apiCalls.js";

let allUsersData = [];
let allTripData = []
let allDestinationData = [];
let allSingleUserData = [];

export const fetchAllData = () => {
  Promise.all([fetchAllUserData(), fetchSingleUserData(), fetchAllTripsData(), fetchAllDestinationData()])
    .then(([allUserDataResult, singleUserDataResult, allTripsDataResult, allDestinationDataResult]) => {
      console.log('All Users data fetched successfully:', allUserDataResult);
      console.log('All Trips Data fetched successfully:', allTripsDataResult)
      console.log('All Destination Data fetched successfully:', allDestinationDataResult);
      
      allUsersData = allUserDataResult;
      allTripData = allTripsDataResult;
      allDestinationData = allDestinationDataResult;
      allSingleUserData = singleUserDataResult;

    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
};


//functions invokation
fetchAllData();

export{
  allUsersData,
  allTripData,
  allDestinationData,
  allSingleUserData
};